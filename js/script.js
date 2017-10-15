// Business (or back-end) logic:
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//Everything below this line is user interface (or front-end) logic:
let number1 = parseFloat(prompt('Enter a number: '));
let number2 = parseFloat(prompt('Enter another number: '));

let result = add(number1, number2);
alert(result);
