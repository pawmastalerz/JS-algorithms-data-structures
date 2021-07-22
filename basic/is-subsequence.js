// Write a function which takes in two strings and checks if the characters in the first string form a subsequence of the characters in the second string.
// The function should check whether the characters in the first string appear somewhere in the second string without their order changing.
//
// Time complexity: O(N)
// Space complexity: O(1)

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  let left = 0;
  let right = 0;

  while (right < str2.length) {
    if (left === str1.length - 1) return true;
    if (str2[right] === str1[left]) left++;
    right++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
