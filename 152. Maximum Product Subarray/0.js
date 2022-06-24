/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let ans = -Infinity;
  let max = 1;
  let min = 1;

  for (let i = 0; i < nums.length; i++) {
    let calcMax = nums[i] * max;
    let calcMin = nums[i] * min;

    min = Math.min(calcMax, calcMin, nums[i]);
    max = Math.max(calcMax, calcMin, nums[i]);

    ans = Math.max(ans, Math.max(max, min));
  }

  return ans;
};