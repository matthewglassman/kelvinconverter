//Today's temperature in Kelvin
const kelvin = 0;

//Variable to hold conversion of Kelvin to Celsius
let kelvinToCelsius = kelvin - 273;

//Calculate Fahrenheit from Celcius
let farhenheit = kelvinToCelsius * (9/5) + 32;

//Rounding fahrenheit down to nearest whole number
let TEMPERATURE = Math.floor(farhenheit);

console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);
