function useKeys(keycode) {
  switch (keycode) {
    case '0':
      if (number1 == '' || operator === '') {
        number1 += 0;
      } else if (number1 && !operator) {
        number1 += 0;
      } else {
        number2 += 0;
      }
      input.textContent += 0;
      break;

    case '1':
      if (number1 == '' || operator === '') {
        number1 += 1;
      } else if (number1 && !operator) {
        number1 += 1;
      } else {
        number2 += 1;
      }
      input.textContent += 1;
      break;

    case '2':
      if (number1 == '' || operator === '') {
        number1 += 2;
      } else if (number1 && !operator) {
        number1 += 2;
      } else {
        number2 += 2;
      }
      input.textContent += 2;
      break;

    case '3':
      if (number1 == '' || operator === '') {
        number1 += 3;
      } else if (number1 && !operator) {
        number1 += 3;
      } else {
        number2 += 3;
      }
      input.textContent += 3;
      break;

    case '4':
      if (number1 == '' || operator === '') {
        number1 += 4;
      } else if (number1 && !operator) {
        number1 += 4;
      } else {
        number2 += 4;
      }
      input.textContent += 4;
      break;

    case '5':
      if (number1 == '' || operator === '') {
        number1 += 5;
      } else if (number1 && !operator) {
        number1 += 5;
      } else {
        number2 += 5;
      }
      input.textContent += 5;
      break;

    case '6':
      if (number1 == '' || operator === '') {
        number1 += 6;
      } else if (number1 && !operator) {
        number1 += 6;
      } else {
        number2 += 6;
      }
      input.textContent += 6;
      break;

    case '7':
      if (number1 == '' || operator === '') {
        number1 += 7;
      } else if (number1 && !operator) {
        number1 += 7;
      } else {
        number2 += 7;
      }
      input.textContent += 7;
      break;

    case '8':
      if (number1 == '' || operator === '') {
        number1 += 8;
      } else if (number1 && !operator) {
        number1 += 8;
      } else {
        number2 += 8;
      }
      input.textContent += 8;
      break;

    case '9':
      if (number1 == '' || operator === '') {
        number1 += 9;
      } else if (number1 && !operator) {
        number1 += 9;
      } else {
        number2 += 9;
      }
      input.textContent += 9;
      break;
  }
}
