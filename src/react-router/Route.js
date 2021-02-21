import { Component } from "react";
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";

class Route extends Component {
  static contextType = RouterContext;

  render() {
    const { history, location } = this.context;
    const { component: RouteComponent, computedMatch } = this.props;
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props);
    let routeProps = { history, location };
    let element = null;
    if (match) {
      routeProps.match = match;
      element = <RouteComponent {...routeProps} />
    }
    debugger;
    return element;
  }
}
export default Route;