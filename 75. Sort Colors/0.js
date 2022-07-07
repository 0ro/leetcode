/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

keep 1's in the middle
move 0 to left
move 2 to right

 */
var sortColors = function (nums) {
  let left = 0;
  let middle = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] == 0) {
      [nums[left], nums[middle]] = [nums[middle], nums[left]]
      middle++;
      left++;
    } else if (nums[left] == 1) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      right--;
    }
  }
};
