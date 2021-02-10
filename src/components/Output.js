import React, { useState } from "react";
import OutputForm from "./OutputForm";
import OutputTable from "./OutputTable";

const Output = ({ data }) => {
  const [formData, setFormData] = useState({});
  const onFormUpdate = (delimiter, lines) => {
    if (delimiter !== formData.delimiter || lines !== formData.lines)
      setFormData({ delimiter, lines });
  };
  return (
    <>
      <OutputForm onUpdate={onFormUpdate} />
      {data && <OutputTable formData={formData} fileData={data} />}
    </>
  );
};

export default Output;
