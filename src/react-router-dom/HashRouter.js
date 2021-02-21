import { Component } from "react";
import { Router } from "../react-router";
import { createHashHistory } from "../history";

class HashRouter extends Component {
  history = createHashHistory()//hash实现
  render() {
    debugger;
    console.log("createHashHistory this.history", this.history);
    console.log("createHashHistory this.props", this.props);
    return (
      <Router history={this.history}>
        {this.props.children}
      </Router>
    )
  }
}
export default HashRouter;