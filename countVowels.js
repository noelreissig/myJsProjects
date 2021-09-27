function getCount(str) {
  const vowels = /[aeiouAEIOU]/gi;
  let vowelsCount = 0;
  //validate .length for null
  if (str.match(vowels) != null) {
    return str.match(vowels).length;
  }
  return vowelsCount;
}
