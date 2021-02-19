import React, { Component } from "react";
export default class Profile extends Component {
  render() {
    console.log("Profile", JSON.stringify(this.props, null, 2));
    /**
     * {
        "history": {
          "length": 16,
          "action": "POP",
          "location": {
            "pathname": "/profile",
            "search": "",
            "hash": ""
          }
        },
        "location": {
          "pathname": "/profile",
          "search": "",
          "hash": ""
        },
        "match": {
          "path": "/profile",
          "url": "/profile",
          "isExact": true,
          "params": {}
        }
      }
     */
    return (
      <div>Profile</div>
    )
  }
}