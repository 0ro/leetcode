/**
 * @param {number[]} nums
 * @return {number}
 */

export const majorityElement = function (nums) {
  const k = nums.length / 2;
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    if ((obj[nums[i]] || 0) > k) {
      return nums[i];
    }
  }
};