import operate from './operate';

const calculate = (data, btnName) => {
  const imData = data;
  switch (btnName) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      imData.next += btnName;
      break;
    case '+/-':
      imData.total *= -1;
      imData.next *= -1;
      break;
    case 'AC':
      imData.total = 0;
      imData.next = 0;
      imData.operation = null;
      break;
    case '%':
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (imData.total && imData.next && imData.operation) {
        imData.total = operate(imData.total, imData.next, imData.operation);
      }
      break;
    default:
      imData.total = operate(...data);
      imData.next = 0;
      imData.operation = null;
  }
};
export default calculate;
