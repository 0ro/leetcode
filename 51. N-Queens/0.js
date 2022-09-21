/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let ans = [];

  function canUse(level, arr, k) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
      set.add(arr[i]);
      set.add(arr[i] + level - i);
      set.add(arr[i] - level + i);
    }
    return !set.has(k);
  }

  function dfs(level, set) {
    if (level == n) {
      ans.push(set.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (canUse(level, set, i)) {
        set.push(i);
        dfs(level + 1, set);
        set.pop();
      }
    }

  }

  dfs(0, []);

  return ans.map((item) => {
    return item.map((i) => {
      return new Array(n).fill(0).map((_, index) => index == i ? 'Q' : '.').join('');
    })
  });
};