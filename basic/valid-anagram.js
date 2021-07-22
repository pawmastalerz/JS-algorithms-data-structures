// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//
// Time complexity: O(N)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Obj = counterObj(str1);
  const str2Obj = counterObj(str2);

  for (const key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) return false;
  }

  return true;

  function counterObj(str) {
    let objWithCounts = {};
    for (const chr of str) {
      objWithCounts[chr] = (objWithCounts[chr] || 0) + 1;
    }
    return objWithCounts;
  }
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
