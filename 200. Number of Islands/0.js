/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let ans = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] == '0') {
        continue;
      }
      ans++;
      dfs(r, c);
    }
  }

  function dfs(r, c) {
    grid[r][c] = '0';
    if (grid[r + 1]?.[c] == '1') {
      dfs(r + 1, c);
    }
    if (grid[r - 1]?.[c] == '1') {
      dfs(r - 1, c);
    }
    if (grid[r]?.[c + 1] == '1') {
      dfs(r, c + 1);
    }
    if (grid[r]?.[c - 1] == '1') {
      dfs(r, c - 1);
    }
  }
  return ans;
};