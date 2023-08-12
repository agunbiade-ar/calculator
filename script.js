const equal = document.getElementById('equal');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

const del = document.getElementById('delete');
const cls = document.getElementById('clear');

const dot = document.getElementById('dot');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

let input = document.getElementById('input');
let output = document.getElementById('output');

let number1 = '';
let number2 = '';
let operator = '';
let result = '';
let boolCalculated = false;

function evaluate() {
  result = operation(number1, number2, operator);
  boolCalculated = true;
  output.textContent = result;
  input.textContent = '0';

  number1 = '';
  number2 = '';
  operator = '';
  result = '';
}

function reset() {
  boolCalculated = false;
  number1 = '';
  number2 = '';
  operator = '';
  result = '';
  (input.textContent = '0'), (output.textContent = '0');
}

dot.addEventListener('click', function () {
  console.log('.');
});

zero.addEventListener('click', function (e) {
  if (number1 == '' || operator === '') {
    number1 += 0;
  } else if (number1 && !operator) {
    number1 += 0;
  } else {
    number2 += 0;
  }
  input.textContent += 0;
});

one.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 1;
  } else if (number1 && !operator) {
    number1 += 1;
  } else {
    number2 += 1;
  }
  input.textContent += 1;
});

two.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 2;
  } else if (number1 && !operator) {
    number1 += 2;
  } else {
    number2 += 2;
  }
  input.textContent += 2;
});

three.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 3;
  } else if (number1 && !operator) {
    number1 += 3;
  } else {
    number2 += 3;
  }
  input.textContent += 3;
});

four.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 4;
  } else if (number1 && !operator) {
    number1 += 4;
  } else {
    number2 += 4;
  }
  input.textContent += 4;
});

five.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 5;
  } else if (number1 && !operator) {
    number1 += 5;
  } else {
    number2 += 5;
  }
  input.textContent += 5;
});

six.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 6;
  } else if (number1 && !operator) {
    number1 += 6;
  } else {
    number2 += 6;
  }
  input.textContent += 6;
});

seven.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 7;
  } else if (number1 && !operator) {
    number1 += 7;
  } else {
    number2 += 7;
  }
  input.textContent += 7;
});

eight.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 8;
  } else if (number1 && !operator) {
    number1 += 8;
  } else {
    number2 += 8;
  }
  input.textContent += 8;
});

nine.addEventListener('click', function () {
  if (number1 == '' || operator === '') {
    number1 += 9;
  } else if (number1 && !operator) {
    number1 += 9;
  } else {
    number2 += 9;
  }
  input.textContent += 9;
});

multiply.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();
  else if (operator && operator == 'multiply') {
    input.textContent = input.textContent;
  } else if (boolCalculated) {
    number1 = output.textContent;
    input.textContent += number1 + '*';
    operator = 'divide';
    boolCalculated = false;
    output.textContent = '0';
  } else {
    operator = 'divide';
    input.textContent += '*';
  }
});

divide.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();
  else if (operator && operator == 'divide') {
    input.textContent = input.textContent;
  } else if (boolCalculated) {
    number1 = output.textContent;
    input.textContent += number1 + '/';
    operator = 'divide';
    boolCalculated = false;
    output.textContent = '0';
  } else {
    operator = 'divide';
    input.textContent += '/';
  }
});

plus.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();
  else if (operator && operator == 'plus') {
    input.textContent = input.textContent;
  } else if (boolCalculated) {
    number1 = output.textContent;
    input.textContent += number1 + '+';
    operator = 'plus';
    boolCalculated = false;
    output.textContent = '0';
  } else {
    operator = 'divide';
    input.textContent += '+';
  }
});

minus.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();
  else if (operator && operator == 'minus') {
    input.textContent = input.textContent;
  } else if (boolCalculated) {
    number1 = output.textContent;
    input.textContent += number1 + '-';
    operator = 'minus';
    boolCalculated = false;
    output.textContent = '0';
  } else {
    operator = 'minus';
    input.textContent += '-';
  }
});

equal.addEventListener('click', function () {
  console.log(input.textContent);
  evaluate();
});

cls.addEventListener('click', reset);

document.addEventListener('keyup', function (e) {
  if (!isFinite(number1) || isNaN(number1)) reset();
  switch (e.key) {
    case 'Enter':
      evaluate();
      break;

    case '-':
      if (number1 && operator && number2) evaluate();
      else if (operator && operator == 'minus') {
        input.textContent = input.textContent;
      } else if (boolCalculated) {
        number1 = output.textContent;
        input.textContent += number1 + '-';
        operator = 'minus';
        boolCalculated = false;
        output.textContent = '0';
      } else {
        operator = 'minus';
        input.textContent += '-';
      }
      break;

    case '+':
      if (number1 && operator && number2) evaluate();
      else if (operator && operator == 'plus') {
        input.textContent = input.textContent;
      } else if (boolCalculated) {
        number1 = output.textContent;
        input.textContent += number1 + '+';
        operator = 'plus';
        boolCalculated = false;
        output.textContent = '0';
      } else {
        operator = 'plus';
        input.textContent += '+';
      }
      break;

    case '*':
      if (number1 && operator && number2) evaluate();
      else if (operator && operator == 'multiply') {
        input.textContent = input.textContent;
      } else if (boolCalculated) {
        number1 = output.textContent;
        input.textContent += number1 + '*';
        operator = 'multiply';
        boolCalculated = false;
        output.textContent = '0';
      } else {
        operator = 'multiply';
        input.textContent += '*';
      }
      break;

    case '/':
      if (number1 && operator && number2) evaluate();
      else if (operator && operator == 'divide') {
        input.textContent = input.textContent;
      } else if (boolCalculated) {
        number1 = output.textContent;
        input.textContent += number1 + '/';
        operator = 'divide';
        boolCalculated = false;
        output.textContent = '0';
      } else {
        operator = 'divide';
        input.textContent += '/';
      }
      break;

    case 'c' || 'C':
      reset();
      break;

    default:
      useKeys(e.key);
      break;
  }
  // console.log(number1, operator, number2, result);
});
