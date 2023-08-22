/**
 * Write two JavaScript functions that calculate
 * the multiplication and division of two numbers.
 * The name of your first function must be multiplication
 * and the name of the second function must be division.
 * The functions must take 2 arguments corresponding to the
 * numbers to be multiplied or divided: i and j.
 * The multiplication function must return the
 * product of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 * The division function must return the
 * quotient of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

function multiplication(num1, num2) {
  const result1 = num1 * num2;
  let result = result1.toFixed(2)
  return result;
}

function division(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  const result1 = num1 / num2;
  let result = result1.toFixed(2)
  return result;
}

// Example usage
const number1 = 5;
const number2 = 6;

const multiplicationResult = multiplication(number1, number2);
console.log(multiplicationResult); 

const dividend = 5;
const divisor = 6;

const divisionResult = division(dividend, divisor);
console.log(divisionResult);


  
  
// End of code

// Do not modify code below this line.
// --------------------------------
