# Table of Contents
- [Reverse A String](#reverse-a-string)
- [Factorialize A Number](#factorialize-a-number)
- [Check for Palindrome](#check-for-palindrome)
- [Find the Longest word in a string](#find-the-longest-word-in-a-string)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)

## Reverse A String <a name="reverse-a-string"></a>

```
function reverseString(str) {
  const strArr = str.split('');
  const reverseStrArr = strArr.reverse();
  const reversedString = reverseStrArr.join('');
  return reversedString;
}

const result = reverseString('hello');
console.log(result);
// olleh


function reverseString(str) {
  let final = '';
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}

const result = reverseString('hello');
console.log(result);
// olleh
```

## Factorialize A Number <a name="factorialize-a-number"></a>

```
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

const result = factorialize(5);
console.log(result);
// 120

function factorialize(num) {
  if (num === 1) return 1;
  return num * factorialize(num - 1);
}

const result = factorialize(2);
console.log(result);
// 2
```

## Check for Palindrome <a name="check-for-palindrome"></a>

```
function palindrome(str) {
  const reg = /[\W_]/g;
  const smallStr = str.toLowerCase().replace(reg, '');
  const reversed = smallStr.split('').reverse().join('');
  if (reversed === smallStr) return true;

  return false;
}

const result = palindrome('eye');
console.log(result);
// true
```

## Find the Longest word in a string <a name="find-the-longest-word-in-a-string"></a>

```
function findLongestWord(str) {
  const words = str.split(' ');
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest.length;
}

const result = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(result);
// 6

function findLongestWord(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

const result = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(result);
// 6
```

## Title Case a Sentence <a name="title-case-a-sentence"></a>

```
function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

const result = titleCase("I'm a litte tea pot");
console.log(result);
// I'm A Litte Tea Pot

function titleCase(str) {
  const titled = str
    .toLowerCase()
    .split(' ')
    .map((elem) => elem[0].toUpperCase() + elem.slice(1));
  return titled.join(' ');
}

const result = titleCase("I'm a litte tea pot");
console.log(result);
// I'm A Litte Tea Pot

```

## Return Largest Numbers in Arrays <a name="return-largest-numbers-in-arrays"></a>

```
function largestOfFour(arr) {
  let maxes = [];
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (tempMax < arr[i][j]) tempMax = arr[i][j];
    }
    maxes.push(tempMax);
  }
  return maxes;
}

const result = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(result);
// [ 5, 27, 39, 1001 ]


function largestOfFour(arr) {
  let maxes = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (maxes[i] < arr[i][j]) maxes[i] = arr[i][j];
    }
  }
  return maxes;
}

const result = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(result);
// [ 5, 27, 39, 1001 ]


```

## Confirm the Ending <a name="confirm-the-ending"></a>

```
function confirmEnding(str, target) {
  return str.endsWith(target);
}

const result = confirmEnding('Bastian', 'n');
console.log(result);
// true

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

const result = confirmEnding('Bastian', 'n');
console.log(result);
// true
```

## Repeat a String Repeat a String <a name="repeat-a-string-repeat-a-string"></a>

```
function repeatStringNumTimes(str, num) {
  if (num < 0) return '';

  return str.repeat(num);
}

const result = repeatStringNumTimes('abc', 3);
console.log(result);
// abcabcabc

function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  let final = '';
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}

const result = repeatStringNumTimes('abc', 3);
console.log(result);
// abcabcabc

function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return str + repeatStringNumTimes(str, num - 1);
}

const result = repeatStringNumTimes('abc', 3);
console.log(result);
// abcabcabc
```

## Truncate a String <a name="truncate-a-string"></a>

```
function truncateString(str, num) {
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, num) + '...';
  return str.slice(0, num - 3) + '...';
}

const result = truncateString(
  'A-tisket a-tasket A green and yellow basket',
  11
);
console.log(result);
// A-tisket...
```

## Chunky Monkey <a name="chunky-monkey"></a>

```
function chunkArrayInGroups(arr, size) {
  let groups = [];

  while (arr.length > 0) {
    groups.push(arr.slice(0, size));
    arr = arr.slice(size);
  }

  return groups;
}

const result = chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f'], 2);
console.log(result);
// [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]


function chunkArrayInGroups(arr, size) {
  let groups = [];

  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }

  return groups;
}

const result = chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f'], 2);
console.log(result);
// [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]

```

## <a name=""></a>

```

```

## <a name=""></a>

```

```

## <a name=""></a>

```

```

## <a name=""></a>

```

```