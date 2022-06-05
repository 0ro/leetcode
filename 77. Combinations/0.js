/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  let ans = [];
  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  track(nums, k, [], 0, ans);

  return ans;
};

function track(nums, k, comb, n, ans) {
  if (comb.length === k) {
    ans.push(comb.slice());
    return;
  }
  for (let j = n; j < nums.length; j++) {
    let el = nums[j];
    if (el) {
      nums[j] = null;
      comb.push(el);
      track(nums, k, comb, j, ans);
      nums[j] = el;
      comb.pop();
    }
  }
}