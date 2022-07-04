/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let dp = new Array(nums.length).fill(false);
  dp[nums.length - 1] = true;
  for (let i = dp.length - 2; i >= 0; i--) {
    let jumps = nums[i];
    let res = false;
    while (jumps) {
      res = dp[i + jumps] ? true : false;
      if (res) {
        break;
      }
      jumps--;
    }
    dp[i] = res;
  }

  return dp[0];
};