import operate from './operate';

const calculate = (data, btnName) => {
  let {
    next, total, result, operation,
  } = data;
  switch (btnName) {
    case '+/-':
      next *= -1;
      result = next;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      result = '0';
      break;
    case '=':
      if (operation === null) break;
      next = operate(total, next, operation);
      total = null;
      operation = null;
      result = next.toString();
      break;
    case '%':
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (total === null) {
        total = next;
        next = null;
        operation = btnName;
        break;
      } else {
        total = operate(total, next, operation);
        next = null;
        result = total.toString();
        operation = btnName;
      }
      break;
    default:
      if (next === null) next = '';

      next += btnName;
      result = next;
      break;
  }
  return {
    next, total, result, operation,
  };
};
export default calculate;
