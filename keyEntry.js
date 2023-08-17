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
        number1 += '0';
        input.textContent += '0';
      } else {
        number2 += '0';
        input.textContent += '0';
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
        number1 += '1';
        input.textContent += '1';
      } else {
        number2 += '1';
        input.textContent += '1';
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
        number1 += '2';
        input.textContent += '2';
      } else {
        number2 += '2';
        input.textContent += '2';
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
        number1 += '3';
        input.textContent += '3';
      } else {
        number2 += '3';
        input.textContent += '3';
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
        number1 += '4';
        input.textContent += '4';
      } else {
        number2 += '4';
        input.textContent += '4';
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
        number1 += '5';
        input.textContent += '5';
      } else {
        number2 += '5';
        input.textContent += '5';
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
        number1 += '6';
        input.textContent += '6';
      } else {
        number2 += '6';
        input.textContent += '6';
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
        number1 += '7';
        input.textContent += '7';
      } else {
        number2 += '7';
        input.textContent += '7';
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
        console.log('hello');
        number1 += '8';
        input.textContent += '8';
      } else {
        number2 += '8';
        input.textContent += '8';
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
        number1 += '9';
        input.textContent += '9';
      } else {
        number2 += '9';
        input.textContent += '9';
      }
      break;

    case 'Enter':
      output.textContent = operation(number1, number2, operator, minusValue);
      break;

    case '-':
      if (result) {
        number1 = result;
        result = '';
        number2 = '';
        input.textContent = number1 + '-';
        operator = 'minus';
        output.textContent = '0';
      } else if (number1 && operator && number2) {
        result = operation(number1, number2, operator, minusValue);
        output.textContent = result;
        operator = '';
        minusValue = 0;
      } else if (!number1 && !minusValue) {
        minusValue = -1;
        input.textContent = '-';
      } else if (minusValue && !number1) {
        operator = '';
      } else if (operator == 'minus') {
        input.textContent = input.textContent;
      } else {
        operator = 'minus';
        input.textContent += '-';
      }
      break;

    case '+':
      if (result) {
        number1 = result;
        result = '';
        number2 = '';
        input.textContent = number1 + '+';
        operator = 'plus';
        output.textContent = '0';
      } else if (number1 && operator && number2) {
        result = operation(number1, number2, operator, minusValue);
        output.textContent = result;
        operator = '';
        minusValue = 0;
      } else if (!number1) {
        resetFunction();
      } else if (operator == 'plus') {
        input.textContent = input.textContent;
      } else {
        operator = 'plus';
        input.textContent += '+';
      }
      break;

    case '*':
      if (result) {
        number1 = result;
        result = '';
        number2 = '';
        input.textContent = number1 + '*';
        operator = 'multiply';
        output.textContent = '0';
      } else if (number1 && operator && number2) {
        result = operation(number1, number2, operator, minusValue);
        output.textContent = result;
        operator = '';
        minusValue = 0;
      } else if (!number1) {
        resetFunction();
      } else if (operator == 'multiply') {
        input.textContent = input.textContent;
      } else {
        operator = 'multiply';
        input.textContent += '*';
      }
      break;

    case '/':
      if (result) {
        number1 = result;
        result = '';
        number2 = '';
        input.textContent = number1 + '/';
        operator = 'divide';
        output.textContent = '0';
      } else if (number1 && operator && number2) {
        result = operation(number1, number2, operator, minusValue);
        output.textContent = result;
        operator = '';
        minusValue = 0;
      } else if (!number1) {
        resetFunction();
      } else if (number1 && operator && number2) evaluate();
      else if (operator == 'divide') {
        input.textContent = input.textContent;
      } else {
        operator = 'divide';
        input.textContent += '/';
      }
      break;

    case 'c' || 'C':
      resetFunction();
      break;
  }
}
