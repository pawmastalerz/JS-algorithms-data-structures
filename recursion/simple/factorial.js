// Write a function that mimics Math.pow() - accepts a base and an exponent, returns the power of the base to the exponent.
// Don't worry about negative bases and exponents.

function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
