// Write a function which accepts 2 parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a continguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.
//
// Time complexity: O(N)
// Space complexity: O(1)

function minSubArrayLen(arr, minSum) {
  let minLength = 0;
  let currentSum = 0;

  // Create initial 'window'
  for (let number of arr) {
    currentSum += number;
    minLength++;
    if (currentSum >= minSum) break;
    else if (minLength === arr.length - 1) return 0;
  }

  // Check if the window can be smaller
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum - arr[i];
    if (currentSum >= minSum) {
      minLength--;
      continue;
    } else {
      const nextNumberExists = typeof arr[i + minLength] !== "undefined";
      if (nextNumberExists) currentSum += arr[i + minLength];
    }
  }

  return minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
