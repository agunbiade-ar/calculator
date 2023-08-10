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

function evaluate() {
  result = operation(input.textContent, operator);
  output.textContent = result;
  input.textContent = result;

  number1 = result;
  number2 = '';
  operator = '';
  result = '';
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

  if (!operator && !number2) {
    input.textContent += '*';
    operator = 'multiply';
  }
});

divide.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();

  if (!operator && !number2) {
    input.textContent += '/';
    operator = 'divide';
  }
});

plus.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();

  if (!operator && !number2) {
    input.textContent += '+';
    operator = 'plus';
  }
});

minus.addEventListener('click', function () {
  if (number1 && operator && number2) evaluate();

  if (!operator && !number2) {
    input.textContent += '-';
    operator = 'minus';
  }
});

equal.addEventListener('click', function () {
  console.log(input.textContent);
  evaluate();
});

document.addEventListener('keyup', function (e) {
  switch (e.key) {
    case 'Enter':
      evaluate();
      console.log(number1, operator, number2, result);
      break;

    case '-':
      if (number1 && operator && number2) evaluate();
      if (!operator && !number2) {
        input.textContent += '-';
        operator = 'minus';
      }
      console.log(number1, operator, number2, result);
      break;

    case '+':
      if (number1 && operator && number2) evaluate();
      if (!operator && !number2) {
        input.textContent += '+';
        operator = 'plus';
      }
      console.log(number1, operator, number2, result);
      break;

    case '*':
      if (number1 && operator && number2) evaluate();
      if (!operator && !number2) {
        input.textContent += '*';
        operator = 'multiply';
      }
      console.log(number1, operator, number2, result);
      break;

    case '/':
      if (number1 && operator && number2) evaluate();
      if (!operator && !number2) {
        input.textContent += '/';
        operator = 'divide';
      }
      console.log(number1, operator, number2, result);
      break;

    default:
      useKeys(e.key);
      break;
  }
});
