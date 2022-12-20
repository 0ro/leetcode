/**
 * @param {number[]} nums
 * @return {number}

[3,4,-1,4]

 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums.length || nums[i] < 1) {
      nums[i] = null;
    }
  }

  let i = 0;
  while (i < nums.length) {
    if (!nums[i]) {
      i++;
      continue;
    }
    if (nums[i] != i + 1) {
      let index = nums[i] - 1;
      let tmp = nums[index];

      nums[index] = nums[i];
      nums[i] = tmp;

      if (tmp == nums[index]) {
        nums[i] = null;
      }
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      return i + 1;
    }
  }

  return nums.length + 1;
}