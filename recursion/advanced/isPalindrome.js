// Write a recursive function which returns true if the string passed to it is a palindrome; otherwise return false.

function isPalindrome(str) {
  function generateReverse(inputStr) {
    if (inputStr.length === 1) return inputStr[0];
    return generateReverse(inputStr.slice(1)) + inputStr[0];
  }

  return generateReverse(str) === str;
}

// Or, using a pure recursion, keep comparing edge chars:
// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
//   return false;
// }

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
