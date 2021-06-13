import React from "react";
import "./_table.scss";

const DataTable = ({
  items,
  renderHead,
  renderRow,
}) => {
  return (
    <table className="__dml_table" cellSpacing={0} cellPadding={0}>
      <thead>
        {renderHead()}
      </thead>

      <tbody>{items.map((row) => renderRow(row))}</tbody>
    </table>
  );
}

export default DataTable;