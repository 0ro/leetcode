/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function (nums) {
  let count = 1;
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      ans = nums[i];
    }
    count = count + (ans === nums[i] ? 1 : -1)
  }
  return ans;
};