export const processData = ({ lines, delimiter }, fileData) => {
  if (lines < 0) return [];
  const rows = fileData.split("\n");
  const modifiedRows = rows.map((row) => {
    const updatedRow = row.split(delimiter);
    if (updatedRow.length > 4) {
      updatedRow.length = 4;
    }
    return updatedRow;
  });

  if (modifiedRows.length > lines) {
    modifiedRows.length = lines;
  }
  debugger;
  return modifiedRows;
};
