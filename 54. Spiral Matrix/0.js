/**
  1 2 3   right (increase column) -> down (increase row) -> left(decrease column) -> up (decrease row)
  4 5 6
  7 8 9
  1 2 3 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = function (matrix) {
  let ans = [];
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up
  let current = 0;

  let i = 0;
  let j = 0;
  let len = matrix.length * matrix[0].length;

  for (let k = 0; k < len; k++) {
    ans[k] = matrix[i][j];
    let nextRow = matrix[i + directions[current][0]];
    let nextElement = matrix[i + directions[current][0]]?.[j + directions[current][1]]

    // reset value 
    matrix[i][j] = undefined;

    if (nextRow === undefined || nextElement === undefined) {
      // change direction
      if (current === 3) {
        current = 0;
      } else {
        current += 1;
      }
    }
    i = i + directions[current][0];
    j = j + directions[current][1];
  }

  return ans;
};