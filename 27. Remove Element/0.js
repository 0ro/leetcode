/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}


 [2,2,2,_,_]
  ^   ^    


 */
var removeElement = function (nums, val) {
  let ans = 0;
  let index = 0;
  let right = nums.length - 1;

  while (index <= right) {
    if (nums[index] == val) {
      [nums[index], nums[right]] = [nums[right], nums[index]];
      nums[right] = '_';
      right--;
      ans++;
    } else {
      index++;
    }
  }

  return nums.length - ans;
};