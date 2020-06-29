import bigJs from 'big.js';

const operate = (fNum, sNum, sign) => {
  let bigFnum;
  let bigSnum;
  if (fNum === null || sNum === null) {
    bigFnum = bigJs(0);
    bigSnum = bigJs(0);
  } else if (sNum > 0 && sNum !== '.') {
    bigFnum = bigJs(fNum);
    bigSnum = bigJs(sNum);
  } else {
    return 0;
  }

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
