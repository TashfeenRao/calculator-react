import bigJs from 'big.js';

const operate = (fNum, sNum, sign) => {
  const bigFnum = bigJs(fNum);
  const bigSnum = bigJs(sNum);
  switch (sign) {
    case '+':
      return bigFnum.plus(bigSnum);
    case '-':
      return bigFnum.minus(bigSnum);
    case 'x':
      return bigFnum.mul(bigSnum);
    case '÷':
      return bigFnum.div(bigSnum);
    case '%':
      return bigFnum.mod(bigSnum);
    default:
      return -1;
  }
};
export default operate;
