function operation(num1, num2, operator, minusValue) {
  let value;
  if (num1 < 0) {
    num1 = parseFloat(num1);
  } else if (minusValue === -1) num1 = parseFloat(num1) * minusValue;
  else {
    num1 = parseFloat(num1);
  }

  switch (operator) {
    case 'multiply':
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = num1 * parseFloat(num2);
      break;
    case 'divide':
      if (num2 == undefined || num2 == null || num2 == '') {
        num2 = undefined;
        value = undefined;
      } else {
        value = num1 / parseFloat(num2);
      }
      break;
    case 'plus':
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = num1 + parseFloat(num2);
      break;
    case 'minus':
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = num1 - parseFloat(num2);
  }
  return value.toString();
}
