import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

export function useParams() {
  const match = React.useContext(RouterContext).match;
  return match ? match.params : {};
}
export function useLocation() {
  return React.useContext(RouterContext).location;
}
export function useHistory() {
  return React.useContext(RouterContext).history;
}
export function useRouteMatch(path) {
  const location = useLocation();
  const match = React.useContext(RouterContext).match;

  return path ? matchPath(location.pathname, path) : match;
}