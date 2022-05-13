/**
 * @param {number[]} nums
 * @return {number}
 */
export const findDuplicate = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = Math.abs(nums[i]);
    if (nums[current] < 0) {
      ans = current;
    }
    nums[current] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(nums[i]);
  }
  return ans;
};