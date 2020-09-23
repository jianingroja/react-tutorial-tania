import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class TableProps extends Component {
  render() {
    //it has only one props at this moment;
    const { characterData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default TableProps;
