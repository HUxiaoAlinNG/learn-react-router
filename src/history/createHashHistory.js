function createHashHistory() {
  const stack = [];
  let index = -1;
  let action;//最新的动作
  let state;//最新的状态
  let listeners = [];
  function listen(listener) {
    listeners.push(listener);
    //unlisten
    return function () {
      listeners = listeners.filter(l => l !== listener);
    }
  }
  function go(n) {
    action = "POP";
    index += n;
    let nextLocation = stack[index];
    state = nextLocation.state;
    window.location.hash = nextLocation.pathname;
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  // 监听hash变化
  window.addEventListener("hashchange", () => {
    let pathname = window.location.hash.slice(1);
    // 合并history
    Object.assign(history, { action, location: { pathname, state } });
    if (action === "PUSH") {
      stack[++index] = history.location;
    }
    listeners.forEach(listener => listener(history.location));
  });
  function push(pathname, nextState) {
    action = "PUSH";
    state = typeof pathname === "object" ? pathname.state : nextState;
    window.location.hash = typeof pathname === "object" ? pathname.pathname : pathname;
  }
  const history = {
    action: "POP",//默认是POP
    go,
    goBack,
    goForward,
    push,
    listen,
    location: { pathname: "/", state: undefined },
  }
  // 截断 # 
  window.location.hash = window.location.hash ? window.location.hash.slice(1) : "/";
  return history;
}

export default createHashHistory;