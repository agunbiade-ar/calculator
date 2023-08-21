function useKeys(keycode, resetFunction) {
  switch (keycode) {
    case '0':
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
          input.textContent = input.textContent;
        } else {
          number2 += '0';
          input.textContent += '0';
        }
      }
      break;

    case '1':
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
      break;

    case '2':
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
      break;

    case '3':
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
      break;

    case '4':
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
      break;

    case '5':
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
      break;

    case '6':
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
      break;

    case '7':
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
      break;

    case '8':
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
      break;

    case '9':
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
      break;

    case 'Enter':
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
      break;

    case '-':
      if (result) {
        result = '';
        operator = 'minus';
        input.textContent = number1 + '' + getOperator(operator);
        output.textContent = '0';
      } else if (number1 && operator && number2) {
        result = operation(number1, number2, operator, minusValue);
        number1 = result;
        console.log(number1, result);
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
      break;

    case '+':
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
        resetFunction();
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
      break;

    case '*':
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
        resetFunction();
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
      break;

    case '/':
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
        resetFunction();
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
      break;

    case 'c' || 'C':
      resetFunction();
      break;

    case 'Delete':
      if (!number1) {
        resetFunction();
      } else if (number1 && !operator) {
        number1 = number1.slice(0, number1.length - 1);

        if (minusValue) {
          input.textContent = '-' + number1;
        } else {
          input.textContent = number1;
          if (!number1) resetFunction();
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
          input.textContent =
            '-' + number1 + '' + operatorSymbol + '' + number2;
        } else {
          input.textContent = number1 + '' + operatorSymbol + '' + number2;
        }
      }
      break;

    case '.':
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
      break;
  }
}
