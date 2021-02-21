import React from "react";
import { Link } from "./";
import { __RouterContext as RouterContext, matchPath } from "../react-router";

function NavLink(props) {
  const context = React.useContext(RouterContext);
  const { pathname } = context.location;
  const {
    to: path,//Link的to属性，指的对应的路径
    className: classNameProp = "",//自定义类名
    activeClassName = "active",//激活类名
    style: styleProp = {},//普通样式
    activeStyle = {},//只有路径匹配的才会生效
    children,
    exact
  } = props;
  const isActive = matchPath(pathname, { path, exact });
  const className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
  const style = isActive ? { ...styleProp, ...activeStyle } : styleProp;
  const linkProps = {
    className,
    style,
    to: path,
    children
  }
  return <Link {...linkProps} />

}
function joinClassnames(...classnames) {
  return classnames.filter(c => c).join(" ");
}
export default NavLink;