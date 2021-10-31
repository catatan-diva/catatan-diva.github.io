function factorialize(num) {
  if (num === 1) return 1;
  return num * factorialize(num - 1);
}

const result = factorialize(2);
console.log(result);
