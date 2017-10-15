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
$('form#add').submit(function(event) {
  event.preventDefault();
  alert('form submitted');
  let number1 = parseFloat($('input#number1').val());
  let number2 = parseFloat($('input#number2').val());
  let result = add(number1, number2);
  $('h1#output').text(result);
});
