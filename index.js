function findLongestWord(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

const result = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(result);
