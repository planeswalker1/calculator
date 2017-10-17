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
  let addInput1 = parseFloat($('input#add1').val());
  let addInput2 = parseFloat($('input#add2').val());
  let result = add(addInput1, addInput2);
  $('p#addOutput').text(result);
});
