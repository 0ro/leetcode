/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    ans = Math.max(ans, (r - l) * Math.min(height[r], height[l]))
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return ans;
};