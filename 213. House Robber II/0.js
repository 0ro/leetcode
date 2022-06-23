/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function helper(numbers) {
    let dp = [];
    for (let i = 0; i < numbers.length; i++) {
      dp[i] = Math.max(numbers[i] + (dp[i - 2] ?? 0), dp[i - 1] ?? 0);
    }
    return dp[numbers.length - 1] ?? 0;
  }

  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
};