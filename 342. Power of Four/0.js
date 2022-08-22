/**
 * @param {number} n
 * @return {boolean}

pow(2, x) * pow(2, x) = n

logb a = x

log4 16 = 2

pow(b, x) = a

log 16 / log 4

 */
var isPowerOfFour = function(n) {
  return Number.isInteger(Math.log(n)/Math.log(4));
};