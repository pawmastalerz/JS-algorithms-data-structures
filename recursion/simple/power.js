// Write a function that mimics Math.pow() - accepts a base and an exponent, returns the power of the base to the exponent.
// Don't worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
