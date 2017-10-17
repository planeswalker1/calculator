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

$('form#subtract').submit(function(event) {
  event.preventDefault();
  let subtractInput1 = parseFloat($('input#subtract1').val());
  let subtractInput2 = parseFloat($('input#subtract2').val());
  let result = subtract(subtractInput1, subtractInput2);
  $('p#subtractOutput').text(result);
});

$('form#multiply').submit(function(event) {
  event.preventDefault();
  let multiplyInput1 = parseFloat($('input#multiply1').val());
  let multiplyInput2 = parseFloat($('input#multiply2').val());
  let result = multiply(multiplyInput1, multiplyInput2);
  $('p#multiplyOutput').text(result);
});
