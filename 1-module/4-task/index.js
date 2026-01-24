function checkSpam(str) {
  const firstSubstrToCheck = '1xBet';
  const secondSubstrToCheck = 'XXX';

  const lowerStr = str.toLowerCase();

  return lowerStr.includes(firstSubstrToCheck.toLowerCase()) ||
      lowerStr.includes(secondSubstrToCheck.toLowerCase());
}
