/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const setZeroes = function (matrix) {
  let zeroCoords = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) {
        zeroCoords.push({ row: i, column: j })
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      for (let k = 0; k < zeroCoords.length; k++) {
        let { row, column } = zeroCoords[k];
        if (i === row || j === column) {
          matrix[i][j] = 0;
        }
      }
    }
  }
};