function getMinMax(str) {
  const numbersArray = str
      .split(' ')
      .filter(substr => isFinite(substr));

  return {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray)
  };
}
