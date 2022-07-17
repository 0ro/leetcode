/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

consider that after dividing one of the half will be sorted

 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] == target) {
      return m;
    } else if (nums[l] <= nums[m]) {
      if (target >= nums[l] && target <= nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target >= nums[m] && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};