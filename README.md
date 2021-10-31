# Reverse A String

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

# Factorialize A Number

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

# 

```

```

# 

```

```

# 

```

```

# 

```

```

# 

```

```