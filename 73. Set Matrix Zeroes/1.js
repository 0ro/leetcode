/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const setZeroes = function (matrix) {
  let firstRow = false;
  let firstCol = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
        if (i === 0) {
          firstRow = true;
        }
        if (j === 0) {
          firstCol = true;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 1; j < row.length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (firstCol) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][0] = 0;
    }
  }
};