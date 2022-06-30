/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) {
    return [];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    let target = -1 * nums[i];
    while (l < r) {
      if (l > i + 1 && nums[l] === nums[l - 1]) {
        l++;
        continue;
      }
      if (r < nums.length - 1 && nums[r] === nums[r + 1]) {
        r--;
        continue;
      }
      if (nums[l] + nums[r] < target) {
        l++;
      } else if (nums[l] + nums[r] > target) {
        r--;
      } else {
        ans.push([nums[i], nums[l], nums[r]]);
        l++;
      }
    }
  }

  return ans;
};
