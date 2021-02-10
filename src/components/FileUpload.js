import React, { useState, useRef } from "react";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const triggerFileUpload = () => {
    inputRef.current.click();
  };
  const readFile = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile || uploadedFile.type !== "text/plain") {
      console.error("Invalid file selected");
      return;
    }
    setFile(uploadedFile.name);
    const fileReader = new FileReader();
    fileReader.readAsText(uploadedFile);
    fileReader.onload = onUpload;
  };
  return (
    <div className="ui grid">
      <div className="four wide column">Choose the file to upload</div>
      <div className="three wide column">
        <button className="ui primary button" onClick={triggerFileUpload}>
          Upload File
        </button>
        <input
          required
          ref={inputRef}
          type="file"
          accept=".txt"
          onChange={readFile}
          hidden
        ></input>
        {file}
      </div>
    </div>
  );
};

export default FileUpload;
