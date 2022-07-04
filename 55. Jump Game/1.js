/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (max > nums.length) {
      return true;
    }
    if (i > max) return false;
    max = Math.max(i + nums[i], max);
  }

  return true;
};