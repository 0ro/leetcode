/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let ans = nums[0]

  for (let i = 0; i < nums.length; i++) {
    let abs = Math.abs(nums[i]);
    let currentAbs = Math.abs(ans);
    if (currentAbs > abs || (currentAbs == abs && ans < nums[i])) {
      ans = nums[i];
    }
  }

  return ans;
};