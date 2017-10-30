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
  let number1 = parseFloat($('input#input1').val());
  let number2 = parseFloat($('input#input2').val());
  let operator = $('input:radio[name=operator]:checked').val();
  let result = add(number1, number2);
  console.log('1st number: ' + number1, '|2nd number: ' + number2, '|operator: ' + operator, '|result: ' + result);
  $('p#output').text(result);
});
