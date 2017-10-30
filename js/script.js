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

$('form#calculator').submit(function (event) {
  event.preventDefault();
  let number1 = $('input#input1').val();
  let number2 = $('input#input2').val();
  let operator = $('input:radio[name=operator]:checked').val();
  console.log(number1, number2, operator);
});
