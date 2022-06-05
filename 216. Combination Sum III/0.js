/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  let ans = [];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function track(sum, set, j) {
    if (set.length == k && sum == n) {
      ans.push(set.slice());
      return;
    }
    if (sum > n) {
      return;
    }

    for (let i = j; i < nums.length; i++) {
      let el = nums[i];
      if (el) {
        nums[i] = null;
        set.push(el);

        track(sum + el, set, i)

        set.pop();
        nums[i] = el;
      }

    }
  }

  track(0, [], 0);

  return ans;
};