// Given an array of integers and a number, write a function, which finds the maximum sum of a subarray with the length of the number passed to the function.
// A subarray must consist of consecutive elements from the array.
//
// Time complexity: O(N)
// Space complexity: O(1)

function maxSubarraySum(arr, subArrLen) {
  if (arr.length < subArrLen) return null;

  let maxSum = 0;

  for (let i = 0; i < subArrLen; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = 1; i <= arr.length - subArrLen; i++) {
    tempSum = tempSum - arr[i - 1] + arr[i + subArrLen - 1];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
