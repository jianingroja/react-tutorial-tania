import React, { Component } from "react";
import TableSimpleComponent from "./Table-simpleComponent";

class AppSimpleComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <TableSimpleComponent />
      </div>
    );
  }
}

export default AppSimpleComponent;
