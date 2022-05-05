/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let m = l + r >> 1;

  while (l <= r) {
    if (nums[m] < (nums[m - 1] ?? 0)) {
      return nums[m];
    } else if (nums[m] >= nums[0]) {
      l = m + 1;
      m = l + r >> 1;
    } else {
      r = m - 1;
      m = l + r >> 1;
    }
  }
  return nums[0];
};