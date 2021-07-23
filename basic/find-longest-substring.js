// Write a function which accepts a string and returns the length of the longest substring with all distinct characters.
//
// Time complexity: O(N)

function findLongestSubstring(str) {
  let longestSubstrLen = 0;
  let checked = {};
  let left = 0;

  for (let i = 0; i < str.length; i++) {
    if (checked[str[i]]) {
      left = Math.max(left, checked[str[i]]);
    }
    longestSubstrLen = Math.max(i + 1 - left, longestSubstrLen);
    checked[str[i]] = i + 1;
  }
  return longestSubstrLen;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
