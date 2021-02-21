import { Component } from "react";
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";

class Route extends Component {
  static contextType = RouterContext;

  render() {
    const { history, location } = this.context;
    const { component: RouteComponent, computedMatch, render } = this.props;
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props);
    let routeProps = { history, location };
    let element = null;

    if (match) {
      routeProps.match = match;
      // 优先级 component > render
      if (RouteComponent) {
        element = <RouteComponent {...routeProps} />
      } else if (render) {
        element = render(routeProps);
      } else {
        element = null;
      }
    }

    return element;
  }
}
export default Route;