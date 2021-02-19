import React, { Component } from "react";
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
      <div>User</div>
    )
  }
}