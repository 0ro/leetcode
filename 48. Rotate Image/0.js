/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 
 1 2  =>  3 1
 3 4      4 2
 
 
 3 4  => 3 1
 1 2     4 2
 
 */

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length / 2; i++) {
    let tmp = matrix[matrix.length - 1 - i];
    matrix[matrix.length - 1 - i] = matrix[i];
    matrix[i] = tmp;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
};