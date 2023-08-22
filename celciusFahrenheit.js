/**
 * Write two JavaScript functions that convert temperatures
 * to and from Celsius and Fahrenheit.
 * The name of your first function must be celciusToFahrenheit
 * and the name of the second function must be fahrenheitToCelcius.
 * The functions must take one arguments corresponding
 * to the temperature to be converted: temperature.
 * The celciusToFahrenheit function must return
 * the temperature converted from Celcius to Fahrenheit.
 * Round off the returned value to 2 decimal places.
 * The fahrenheitToCelcius function must return
 * the temperature converted from Fahrenheit to Celcius.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here


  function celciusToFahrenheit(celcius) {
    const fahrenheit1 = (celcius * 9/5) + 32;
    let fahrenheit = fahrenheit1.toFixed(2);
    return fahrenheit;
  }
  
  function fahrenheitToCelcius(fahrenheit) {
    const celcius1 = (fahrenheit - 32) * 5/9;
    let celcius = celcius1.toFixed(2);
    return celcius;
  }
  
  // Example usage
  const temperatureInCelcius = 0;
  const convertedToFahrenheit = celciusToFahrenheit(temperatureInCelcius);
  console.log(convertedToFahrenheit);
  
  const temperatureInFahrenheit = 32;
  const convertedToCelcius = fahrenheitToCelcius(temperatureInFahrenheit);
  console.log(convertedToCelcius);
  
  

// End of code

// Do not modify code below this line.
