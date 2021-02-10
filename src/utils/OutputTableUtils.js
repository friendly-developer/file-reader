export const processData = (formData, fileData) => {
  const rows = fileData.split("\n");
  const modifiedRows = rows.map((row) => {
    const updatedRow = row.split(formData.delimiter);
    if (updatedRow.length > 4) {
      updatedRow.length = 4;
    }
    return updatedRow;
  });

  if (modifiedRows.length > formData.lines) {
    modifiedRows.length = formData.lines;
  }

  return modifiedRows;
};
