/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0;
  let i = 0;
  let ans = Infinity;
  let acc = 0;

  while (i < nums.length) {
    acc += nums[i];
    while (acc >= target) {
      ans = Math.min(ans, i + 1 - l);
      acc -= nums[l];
      l++;
    }
    i++;
  }

  return ans == Infinity ? 0 : ans;
};