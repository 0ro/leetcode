/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ans = [];

  let i = 1;
  let acc = '' + nums[0];

  while (i <= nums.length) {
    if (nums[i] - 1 == nums[i - 1]) {
      i++;
    } else {
      if ('' + nums[i - 1] != acc) {
        acc += '->' + nums[i - 1];
      }
      ans.push(acc);
      acc = '' + nums[i];
      i++;
    }
  }


  return ans;
};