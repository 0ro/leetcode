/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  let n = grid[0].length;
  let ans = [];

  function dfs(ball, row, column) {
    if (row == grid.length) {
      ans[ball] = column;
      return;
    }
    if (grid[row][column] != grid[row][column + grid[row][column]]) {
      ans[ball] = -1;
      return;
    }
    dfs(ball, row + 1, column + grid[row][column]);
  }

  for (let i = 0; i < n; i++) {
    dfs(i, 0, i);
  }

  return ans;
};