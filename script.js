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
let minusValue = 0;

function reset() {
  boolCalculated = false;
  number1 = '';
  number2 = '';
  operator = '';
  result = '';
  (input.textContent = '0'), (output.textContent = '0');
  minusValue = 0;
}

function getOperator(operator_) {
  return operator_ === 'minus'
    ? '-'
    : operator_ === 'plus'
    ? '+'
    : operator_ === 'divide'
    ? '/'
    : '*';
}

dot.addEventListener('click', function () {
  if (number1 == '') {
    number1 = 0 + '.';
    input.textContent = number1;
  } else if (number1.indexOf('.') === -1) {
    number1 += '.';
    input.textContent += '.';
  } else if (number1.indexOf('.') !== -1) {
    number1 = number1;
  }
  if (operator) {
    if (number2 == '') {
      number2 = 0 + '.';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else if (number2.indexOf('.') === -1) {
      number2 += '.';
      input.textContent += '.';
    } else {
      number2 = number2;
    }
  }
});

zero.addEventListener('click', function (e) {
  if (!number1) {
    number1 = '0';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = number1;
    } else {
      number1 += '0';
      input.textContent += '0';
    }
  } else {
    if (number2 == '0') {
      number2 = number2;
    } else {
      number2 += '0';
      input.textContent += '0';
    }
  }
});

one.addEventListener('click', function () {
  if (!number1) {
    number1 = '1';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '1';
      input.textContent = '1';
    } else {
      number1 += '1';
      input.textContent += '1';
    }
  } else {
    if (number2 == '0') {
      number2 = '1';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '1';
      input.textContent += '1';
    }
  }
});

two.addEventListener('click', function () {
  if (!number1) {
    number1 = '2';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '2';
      input.textContent = '2';
    } else {
      number1 += '2';
      input.textContent += '2';
    }
  } else {
    if (number2 == '0') {
      number2 = '2';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '2';
      input.textContent += '2';
    }
  }
});

three.addEventListener('click', function () {
  if (!number1) {
    number1 = '3';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '3';
      input.textContent = '3';
    } else {
      number1 += '3';
      input.textContent += '3';
    }
  } else {
    if (number2 == '0') {
      number2 = '3';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '3';
      input.textContent += '3';
    }
  }
});

four.addEventListener('click', function () {
  if (!number1) {
    number1 = '4';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '4';
      input.textContent = '4';
    } else {
      number1 += '4';
      input.textContent += '4';
    }
  } else {
    if (number2 == '0') {
      number2 = '4';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '4';
      input.textContent += '4';
    }
  }
});

five.addEventListener('click', function () {
  if (!number1) {
    number1 = '5';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '5';
      input.textContent = '5';
    } else {
      number1 += '5';
      input.textContent += '5';
    }
  } else {
    if (number2 == '0') {
      number2 = '5';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '5';
      input.textContent += '5';
    }
  }
});

six.addEventListener('click', function () {
  if (!number1) {
    number1 = '6';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '6';
      input.textContent = '6';
    } else {
      number1 += '6';
      input.textContent += '6';
    }
  } else {
    if (number2 == '0') {
      number2 = '6';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '6';
      input.textContent += '6';
    }
  }
});

seven.addEventListener('click', function () {
  if (!number1) {
    number1 = '7';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '7';
      input.textContent = '7';
    } else {
      number1 += '7';
      input.textContent += '7';
    }
  } else {
    if (number2 == '0') {
      number2 = '7';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '7';
      input.textContent += '7';
    }
  }
});

eight.addEventListener('click', function () {
  if (!number1) {
    number1 = '8';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '8';
      input.textContent = '8';
    } else {
      number1 += '8';
      input.textContent += '8';
    }
  } else {
    if (number2 == '0') {
      number2 = '8';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '8';
      input.textContent += '8';
    }
  }
});

nine.addEventListener('click', function () {
  if (!number1) {
    number1 = '9';
    if (minusValue) {
      input.textContent = minusValue * number1;
    } else {
      input.textContent = number1;
    }
  } else if (number1 && !operator) {
    if (number1 == '0') {
      number1 = '9';
      input.textContent = '9';
    } else {
      number1 += '9';
      input.textContent += '9';
    }
  } else {
    if (number2 == '0') {
      number2 = '9';
      input.textContent =
        input.textContent.slice(0, input.textContent.length) + number2;
    } else {
      number2 += '9';
      input.textContent += '9';
    }
  }
});

multiply.addEventListener('click', function () {
  if (result) {
    result = '';
    input.textContent = number1 + '*';
    operator = 'multiply';
    output.textContent = '0';
  } else if (number1 && operator && number2) {
    result = operation(number1, number2, operator, minusValue);
    number1 = result;
    number2 = '';
    output.textContent = result;
    operator = 'multiply';
    input.textContent = number1 + '' + getOperator(operator);
    result = minusValue = 0;
  } else if (!number1) {
    reset();
  } else if (operator == 'multiply') {
    input.textContent = input.textContent;
  } else if (operator) {
    operator = 'multiply';
    input.textContent =
      input.textContent.slice(0, input.textContent.length - 1) + '*';
  } else {
    operator = 'multiply';
    input.textContent += '*';
  }
});

divide.addEventListener('click', function () {
  if (result && operator) {
    input.textContent = number1 + '/';
    operator = 'divide';
    output.textContent = '0';
  } else if (number1 && operator && number2) {
    result = operation(number1, number2, operator, minusValue);
    number1 = result;
    number2 = '';
    output.textContent = result;
    operator = 'divide';
    input.textContent = number1 + '' + getOperator(operator);
    result = minusValue = 0;
  } else if (!number1) {
    reset();
  } else if (number1 && operator && number2) {
    result = operation(number1, number2, operator, minusValue);
    output.textContent = result;
    operator = 'divide';
    input.textContent = result + '' + getOperator(operator);
  } else if (operator == 'divide') {
    input.textContent = input.textContent;
  } else if (operator) {
    operator = 'divide';
    input.textContent =
      input.textContent.slice(0, input.textContent.length - 1) + '/';
  } else {
    operator = 'divide';
    input.textContent += '/';
  }
});

plus.addEventListener('click', function () {
  if (result) {
    result = 0;
    input.textContent = number1 + '+';
    operator = 'plus';
    output.textContent = '0';
  } else if (number1 && operator && number2) {
    result = operation(number1, number2, operator, minusValue);
    number2 = '';
    output.textContent = result;
    number1 = result;
    operator = 'plus';
    input.textContent = number1 + '' + getOperator(operator);
    result = minusValue = 0;
  } else if (!number1) {
    reset();
  } else if (operator == 'plus') {
    input.textContent = input.textContent;
  } else if (operator) {
    operator = 'plus';
    input.textContent =
      input.textContent.slice(0, input.textContent.length - 1) + '+';
  } else {
    operator = 'plus';
    input.textContent += '+';
  }
});

minus.addEventListener('click', function () {
  if (result) {
    result = '';
    operator = 'minus';
    input.textContent = number1 + '' + getOperator(operator);
    output.textContent = '0';
  } else if (number1 && operator && number2) {
    result = operation(number1, number2, operator, minusValue);
    number1 = result;
    number2 = '';
    output.textContent = result;
    operator = 'minus';
    input.textContent = number1 + '' + getOperator(operator);
    result = minusValue = 0;
  } else if (!number1 && !minusValue) {
    minusValue = -1;
    input.textContent = '-';
  } else if (minusValue && !number1) {
    operator = '';
  } else if (operator == 'minus') {
    input.textContent = input.textContent;
  } else if (operator) {
    operator = 'minus';
    input.textContent =
      input.textContent.slice(0, input.textContent.length - 1) + '-';
  } else {
    operator = 'minus';
    input.textContent += '-';
  }
});

equal.addEventListener('click', function () {
  if (number1 && number2 && operator) {
    output.textContent = result = operation(
      number1,
      number2,
      operator,
      minusValue
    );
    minusValue = 0;
    operator = '';
    input.textContent = number1 = result;
    number2 = '';
  }
});

del.addEventListener('click', function () {
  if (!number1) {
    reset();
  } else if (number1 && !operator) {
    number1 = number1.slice(0, number1.length - 1);

    if (minusValue) {
      input.textContent = '-' + number1;
    } else {
      input.textContent = number1;
      if (!number1) reset();
    }
  } else if (number1 && operator && !number2) {
    if (minusValue) {
      input.textContent = '-' + number1;
      operator = '';
    } else {
      input.textContent = number1;
      operator = '';
    }
  } else {
    number2 = number2.slice(0, number2.length - 1);

    let operatorSymbol = getOperator(operator);

    if (minusValue) {
      input.textContent = '-' + number1 + '' + operatorSymbol + '' + number2;
    } else {
      input.textContent = number1 + '' + operatorSymbol + '' + number2;
    }
  }
});

cls.addEventListener('click', reset);

document.addEventListener('keyup', function (e) {
  useKeys(e.key, reset);

  console.log(
    `number 1 is ${number1}, number 2 is ${number2}, operator is ${operator}, result is ${result}`
  );
});
