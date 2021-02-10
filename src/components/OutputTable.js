import React from "react";
import { processData } from "../utils/OutputTableUtils";

const OutputTable = ({ formData, fileData }) => {
  let processedData = [];

  const generateTable = (rowsData) => {
    if (rowsData.length === 0) {
      return (
        <div className="ui segment">
          No results to display! Select a different file or modify the filters.
        </div>
      );
    }
    return rowsData.map((row) => {
      const convertedRows = row.map((r) => (
        <div key={r} className="ui segment">
          {r}
        </div>
      ));
      return <div className="ui horizontal segments">{convertedRows}</div>;
    });
  };

  if (Object.keys(formData).length > 0 && fileData) {
    processedData = processData(formData, fileData);
  }

  return <div className="ui segments">{generateTable(processedData)}</div>;
};

export default OutputTable;
