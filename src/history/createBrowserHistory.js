/**
 *  action: "POP"
    block: ƒ block(prompt)
    createHref: ƒ createHref(location)
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    length: 17
    listen: ƒ listen(listener)
    location: {pathname: "/", search: "", hash: "", state: undefined}
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
 */
function createBrowserHistory(props) {
  let confirm = props.getUserConfirmation ? props.getUserConfirmation() : window.confirm;
  const globalHistory = window.history;
  let listeners = [];
  let message;

  function go(n) {
    globalHistory.go(n);
  }
  function goBack() {
    go(-1)
  }
  function goForward() {
    go(1)
  }
  function listen(listener) {
    listeners.push(listener);
    return function () {//unlisten
      listeners = listeners.filter(l => l !== listener);
    }
  }
  function setState(newState) {
    // 合并history
    Object.assign(history, newState);
    history.length = globalHistory.length;
    listeners.forEach(listener => listener(history.location));
  }
  /**
   * @param {*} pathname 可能是对象，也可能是字符串
   * @param {*} state 这个路径的状态对象是什么,只是一个路径的描述信息，可以放任何
   */
  function push(pathname, state) {
    const pState = typeof pathname === "object" ? pathname.state : state;
    const pPathname = typeof pathname === "object" ? pathname.pathname : pathname;
    const location = { state: pState, pathname: pPathname };
    if (message) {
      let allow = confirm(message({ pathname }));
      if (!allow) {
        return;
      }
    }
    globalHistory.pushState(location.state, null, location.pathname);
    setState({ action: "PUSH", location });
  }
  function block(newMessage) {
    message = newMessage;
    return () => message = null;
  }
  const history = {
    action: "POP",
    go,
    goBack,
    goForward,
    listen,
    location: { pathname: window.location.pathname, state: globalHistory.state },
    push,
    block,
  }
  return history;
}

export default createBrowserHistory;