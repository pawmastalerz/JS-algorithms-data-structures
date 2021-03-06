// Implement a function, which accepts a sorted array and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
//
// Time complexity: O(N)
// Space complexity: O(N)

function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  let result = 1;

  if (arr.length === 0) return 0;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      result++;
      left = right;
    }
    right++;
  }
  return result;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
