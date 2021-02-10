import React, { useState } from "react";
import FileUpload from "./FileUpload";
import Output from "./Output";

const Dashboard = () => {
  const [fileContents, setFileContents] = useState(null);
  const onUpload = (e) => setFileContents(e.target.result);

  return (
    <div className="ui container">
      <h1 className="ui header">File Reader</h1>

      <div>
        <FileUpload onUpload={onUpload} />
        <Output data={fileContents} />
      </div>
    </div>
  );
};

export default Dashboard;
