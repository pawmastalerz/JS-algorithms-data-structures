// Given two positive integers, find out if the two numbers have the same frequency of digits.
//
// Time complexity: O(N)

function sameFrequency(num1, num2) {
  const num1str = num1.toString();
  const num2str = num2.toString();

  const num1Digits = {};
  const num2Digits = {};

  for (const i of num1str) {
    num1Digits[i] = (num1Digits[i] || 0) + 1;
  }
  for (const i of num2str) {
    num2Digits[i] = (num2Digits[i] || 0) + 1;
  }

  return JSON.stringify(num1Digits) === JSON.stringify(num2Digits);
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
