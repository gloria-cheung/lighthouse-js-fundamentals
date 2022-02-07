function lastIndexOf (arr, value) {
  if (arr.indexOf(value) != -1) {
    let indices = [];
    let idx = arr.indexOf(value);
    while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(value, idx + 1);
    }
    return indices[indices.length - 1];
  } else {
    return -1;
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
// -> 3

