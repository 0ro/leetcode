/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  let ans = [];

  function track(sum, set, n) {
    if (sum === target) {
      ans.push(set.slice())
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = n; i < candidates.length; i++) {
      let el = candidates[i];
      set.push(el);
      track(sum + el, set, i);
      set.pop();
    }
  }

  track(0, [], 0)

  return ans;
};