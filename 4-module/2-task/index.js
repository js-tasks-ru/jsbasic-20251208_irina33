function makeDiagonalRed(table) {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const cells = table.rows[i].cells;
    for (let j = 0; j < cells.length; j++) {
      if (i === j) {
        cells[j].style.backgroundColor = 'red';
        break;
      }
    }
  }
}
