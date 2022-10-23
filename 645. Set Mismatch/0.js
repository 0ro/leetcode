/**
 * @param {number[]} nums
 * @return {number[]}

[1,4,2,2] 
 1,2,2,4



 */
var findErrorNums = function (nums) {
  let ans = [];
  let i = 0;


  while (i < nums.length) {
    let origin = nums[i] - 1;
    if (nums[i] !== nums[origin]) {
      [nums[i], nums[origin]] = [nums[origin], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }

  return ans;
};