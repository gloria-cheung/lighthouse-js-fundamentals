function range (start, end, step) {
  let arr = [];
  if (start < end && step > 0) {
    for (let i= start; i <= end; i += step) {
      arr.push(i);
    }
    return arr;
  } else {
    return arr;
  }
}

console.log(range(0, 10, 2)); 
// -> [0, 2, 4, 6, 8, 10]
