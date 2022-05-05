/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    ans = Math.min(ans, nums[i]);
  }
  return ans;
};