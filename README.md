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

## <a name=""></a>

```

```

## <a name=""></a>

```

```