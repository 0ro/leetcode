/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);

  let ans = [];

  function track(sum, set, j) {
    if (sum > target) {
      return;
    }
    if (sum == target) {
      ans.push(set.slice())
      return;
    }

    for (let i = j; i < candidates.length; i++) {
      let el = candidates[i];
      let prev = candidates[i - 1];
      if (el && el != prev) {
        set.push(el);
        candidates[i] = null;

        track(sum + el, set, i);

        set.pop();
        candidates[i] = el;
      }
    }
  }

  track(0, [], 0)

  return ans;
};