/**
 * Write a JavaScript function that finds the area of a triangle
 * given the lengths of three of its sides
 * The name of your function must be areaOfTriangle
 * The function must take 3 arguments corresponding
 * to the length of one side of the trianle: a, b and c.
 * The function must return the area of the triangle.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here


function areaOfTriangle(side1, side2, side3) {
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area1 = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3)
    );
    let area=area1.toFixed(2);
    return area;
  }
  
  // Test the function
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;
  const triangleArea = areaOfTriangle(side1, side2, side3);
  console.log(triangleArea);


// End of code

// Do not modify code below this line.
// --------------------------------