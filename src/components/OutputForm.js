import React, { useState, useEffect } from "react";

const OutputForm = ({ onUpdate }) => {
  const [delimiter, setDelimiter] = useState("|");
  const [lines, setLines] = useState("2");

  const handleDelimiterChange = (e) => {
    e.stopPropagation();
    setDelimiter(e.target.value);
  };
  const handleLinesChange = (e) => {
    e.stopPropagation();
    setLines(e.target.value);
  };

  useEffect(() => {
    onUpdate(delimiter, lines);
  });

  return (
    <div className="ui grid">
      <div className="four wide column">
        <div className="ui labeled input">
          <div className="ui label">Delimiter</div>
          <input
            type="text"
            value={delimiter}
            onChange={handleDelimiterChange}
          />
        </div>
      </div>
      <div className="four wide column">
        <div className="ui labeled input">
          <div className="ui label">Lines</div>
          <input
            type="number"
            value={lines}
            min="0"
            onChange={handleLinesChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OutputForm;
