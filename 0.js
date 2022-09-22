/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let ans = 0;

  function track(i, j, sum) {
    if (grid[i]?.[j] != 1) {
      return sum;
    }

    sum += 1;
    grid[i][j] = 'c';

    let dirs = [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]];
    for (let k = 0; k < dirs.length; k++) {
      sum += track(dirs[k][0], dirs[k][1], sum) - sum;
    }

    return sum;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        let sum = track(i, j, 0);
        ans = Math.max(ans, sum);
      }
    }
  }

  return ans;
};