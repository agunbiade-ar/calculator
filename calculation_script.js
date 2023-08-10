function operation(res, operator) {
  let value;
  let [num1, num2] = ['', ''];
  switch (operator) {
    case 'multiply':
      [num1, num2] = res.split('*');
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      [num1, num2] = res.split('/');
      if (num2 == undefined || num2 == null || num2 == '') {
        num2 = undefined;
        value = undefined;
      } else {
        value = parseFloat(num1) / parseFloat(num2);
      }
      break;
    case 'plus':
      [num1, num2] = res.split('+');
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = parseFloat(num1) + parseFloat(num2);
      break;
    case 'minus':
      [num1, num2] = res.split('-');
      if (num2 == undefined || num2 == null || num2 == '') num2 == 0;
      value = parseFloat(num1) - parseFloat(num2);
  }
  return value;
}
