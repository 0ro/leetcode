/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = num.toString().split('');

  for (let i = 0; i < num.length; i++) {
    if (num[i] == '6') {
      num[i] = '9';
      break;
    }
  }

  return Number(num.join(''));
};