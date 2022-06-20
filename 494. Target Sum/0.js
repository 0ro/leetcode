/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  let ans = 0;
  let cache = {}

  function backtrack(index, total, sign) {
    if (index == nums.length) {
      if (total == target) {
        ans++;
      }
      return;
    }

    backtrack(index + 1, total + nums[index]);
    backtrack(index + 1, total - nums[index]);
  }

  backtrack(0, 0);

  return ans;
};