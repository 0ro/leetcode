/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let current = Math.abs(nums[i]);

    if (nums[current - 1] < 0) {
      ans.push(current);
    } else {
      nums[current - 1] *= -1;
    }
  }
  return ans;
};