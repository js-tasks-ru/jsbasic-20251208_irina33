function sumSalary(salaries) {
  let result = 0;

  for (let key in salaries) {
    const value = salaries[key];
    if (isFinite(value)) {
      result += value;
    }
  }

  return result;
}
