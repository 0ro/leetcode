/**
 * @param {number[][]} matrix
 * @return {number}

       2            1               3
  6        5    6   5      4        5       4
7  8          7  8


14 13 15
13 12 12
7  8  9

 */
var minFallingPathSum = function (matrix) {
  let dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));

  for (let i = dp.length - 1; i >= 0; i--) {
    for (let j = dp[i].length - 1; j >= 0; j--) {
      let min = Math.min(dp[i + 1]?.[j - 1] ?? Infinity, dp[i + 1]?.[j] ?? Infinity, dp[i + 1]?.[j + 1] ?? Infinity);
      dp[i][j] = matrix[i][j] + (min == Infinity ? 0 : min);
    }
  }

  let ans = Infinity;

  for (let i = 0; i < dp[0].length; i++) {
    ans = Math.min(ans, dp[0][i]);
  }

  return ans;
}