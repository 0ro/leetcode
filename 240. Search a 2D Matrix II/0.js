/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}

 */
var searchMatrix = function (matrix, target) {
  let r = 0;
  let c = matrix[0].length - 1;

  while (r < matrix.length && c >= 0) {
    let pivot = matrix[r][c];
    if (pivot == target) {
      return true;
    } else if (pivot > target) {
      c--;
    } else {
      r++;
    }
  }

  return false;
};