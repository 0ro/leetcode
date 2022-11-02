/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  if (!bank.includes(end)) {
    return -1;
  }
  let ans = Infinity;

  function hasOneMutationWith(str1, str2) {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        cnt++;
      }
    }

    return cnt == 1;
  }

  function dfs(mutation, used, level) {
    if (hasOneMutationWith(mutation, start)) {
      ans = Math.min(level, ans);
      return;
    }
    for (let i = 0; i < bank.length; i++) {
      if (used.has(bank[i])) {
        continue;
      } else if (hasOneMutationWith(mutation, bank[i])) {
        used.add(bank[i]);
        dfs(bank[i], used, level + 1)
        used.delete(bank[i]);
      }
    }
  }

  dfs(end, new Set(end), 1)

  return ans == Infinity ? -1 : ans;
};