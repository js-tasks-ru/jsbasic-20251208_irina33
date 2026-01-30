function camelize(str) {
  const substringsArray = str.split('-');

  const camelizeSubstringsArray = substringsArray.map((substr, index) => {
    if (index > 0) {
      return substr[0].toUpperCase() + substr.slice(1);
    }

    return substr;
  });

  return camelizeSubstringsArray.join('');
}
