import React, { Component } from "react";
import { Link, Route } from "../react-router-dom";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
export default class User extends Component {
  render() {
    console.log("User", JSON.stringify(this.props, null, 2));
    /**
     * {
        "history": {
          "length": 14,
          "action": "POP",
          "location": {
            "pathname": "/user",
            "search": "",
            "hash": ""
          }
        },
        "location": {
          "pathname": "/user",
          "search": "",
          "hash": ""
        },
        "match": {
          "path": "/user",
          "url": "/user",
          "isExact": true,
          "params": {}
        }
      }
     */
    return (
      <div>
        <ul>
          <li><Link to="/user/list">用户列表</Link></li>
          <li><Link to="/user/add">添加用户</Link></li>
        </ul>
        <div>
          <Route path="/user/add" component={UserAdd} />
          <Route path="/user/list" component={UserList} />
          <Route path="/user/detail/:id" component={UserDetail} />
        </div>
      </div>
    )
  }
}