/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
  if (!n) {
    return false; 
  }
  let res = (Math.log(n)/Math.log(3)).toFixed(14);
  
  return Number.isInteger(Math.pow(res, 1))
};