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
