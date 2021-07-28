// Write a function which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let result = [];

  for (const entry of arr) {
    if (!Array.isArray(entry)) result.push(entry);
    else result = result.concat(flatten(entry));
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
