import React, { Component } from "react";
export default class Home extends Component {
  render() {
    console.log("Home", JSON.stringify(this.props, null, 2));
    /**
     * {
        "history": {
          "length": 15,
          "action": "POP",
          "location": {
            "pathname": "/",
            "search": "",
            "hash": ""
          }
        },
        "location": {
          "pathname": "/",
          "search": "",
          "hash": ""
        },
        "match": {
          "path": "/",
          "url": "/",
          "isExact": true,
          "params": {}
        }
      }
     */
    return (
      <div>Home</div>
    )
  }
}