import React, { Component } from "react";
import TableProps from "./Table-props";

class AppProps extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspiring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <TableProps characterData={characters} />
      </div>
    );
  }
}

export default AppProps;
