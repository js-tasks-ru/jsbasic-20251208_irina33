function highlight(table) {
  const rows = table.rows;
  for (let row of rows) {
    highlightAge(row);
    highlightGender(row);
    highlightIsAvailable(row);
  }
}

function highlightAge(row) {
  const ageCell = row.cells[1];
  const age = ageCell.textContent;

  if (age < 18) {
    row.style.textDecoration = 'line-through';
  }
}

function highlightGender(row) {
  const genderCell = row.cells[2];
  const gender = genderCell.textContent;

  row.classList.add(gender === 'm' ? 'male' : 'female');
}

function highlightIsAvailable(row) {
  const isAvailableCell = row.cells[3];
  const isAvailable = isAvailableCell.dataset.available;

  if (!isAvailable) {
    row.setAttribute('hidden', true);
    return;
  }

  row.classList.add(isAvailable === 'true' ? 'available' : 'unavailable');
}
