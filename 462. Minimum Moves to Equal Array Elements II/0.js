/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let mid = nums[Math.floor(nums.length / 2)];

  for (let i = 0; i < nums.length; i++) {
    let res = Math.abs(mid - nums[i]);
    ans += res;
  }
  return ans;
};
