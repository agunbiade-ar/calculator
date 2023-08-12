function operation(num1, num2, operator) {
  let value;
  switch (operator) {
    case 'multiply':
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      if (num2 == undefined || num2 == null || num2 == '') {
        num2 = undefined;
        value = undefined;
      } else {
        value = parseFloat(num1) / parseFloat(num2);
      }
      break;
    case 'plus':
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = parseFloat(num1) + parseFloat(num2);
      break;
    case 'minus':
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = parseFloat(num1) - parseFloat(num2);
  }
  return value;
}
