/**
 * Write a JavaScript function that takes in two numbers
 * and returns true if the sum of both numbers is
 * less than 100 and returns false otherwise.
 * The name of your function must be trueOrFalse.
 * The function must take 2 arguments corresponding
 * to the numbers to be summed up: m and n.
 * The function must return true if the
 * sum of the numbers is greater than 100 and
 * return false otherwise.
 */

// Write your code here

function trueOrFalse(num1, num2) {
  const addition = num1 + num2;

  let sum = addition.toFixed(2);
  return sum > 100;
}

// Example usage
console.log(trueOrFalse(50, 60));  

console.log(trueOrFalse(40, 30));


// End of code

// Do not modify code below this line.
// --------------------------------
