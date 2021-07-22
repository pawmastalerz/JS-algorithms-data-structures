// Implement a function, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
//
// Time complexity: O(N)
// Space complexity: O(N)

function areThereDuplicates(...args) {
  const argsCountsObj = {};

  for (const i of args) {
    argsCountsObj[i] = (argsCountsObj[i] || 0) + 1;
  }

  for (const i in argsCountsObj) {
    if (argsCountsObj[i] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
