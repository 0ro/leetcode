/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  let modulo = 1000000007;
  let memo = new Map();

  function dfs(level, left) {
    if (level == n && left == 0) {
      return 1;
    }
    if (level == n || left <= 0) {
      return 0;
    }

    if (memo.has(`${level}-${left}`)) {
      return memo.get(`${level}-${left}`);
    }

    let count = 0;
    for (let i = 1; i <= k; i++) {
      count += dfs(level + 1, left - i);
      count %= modulo;
    }

    memo.set(`${level}-${left}`, count);
    return count;
  }
  let res = dfs(0, target);

  return res;
};
