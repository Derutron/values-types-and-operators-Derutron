/**
 * Write a JavaScript function that takes a number
 * and increments its value by one.
 * The name of your function must be addByOne.
 * The function must take 1 argument corresponding
 * to the number to be incremented: number.
 * The function must return the value incremented by 1.
 */

// Write your code here

function addByOne(number) {
  var incrementedNumber = number + 1;
  return incrementedNumber;
}

var counter = 1;
while (counter <= 9) {
  console.log(counter);
  counter = addByOne(counter);
}

// End of code

// Do not modify code below this line.
// --------------------------------
