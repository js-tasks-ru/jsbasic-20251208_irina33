function truncate(str, maxlength) {
  const symbolToAdd = '…';

  let resultString = str;

  if (str.length > maxlength) {
    resultString = str.slice(0, maxlength - 1) + symbolToAdd;
  }

  return resultString;
}
