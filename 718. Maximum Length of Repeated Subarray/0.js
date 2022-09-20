/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let dp = new Array(nums1.length + 1).fill(0).map(() => {
    return new Array(nums2.length + 1).fill(0);
  });

  let ans = 0;

  for (let i = nums1.length - 1; i >= 0; --i) {
    for (let j = nums2.length - 1; j >= 0; --j) {
      if (nums1[i] == nums2[j]) {
        let max = dp[i + 1][j + 1];
        dp[i][j] = 1 + max;
        ans = Math.max(dp[i][j], ans);
      }
    }
  }

  return ans;
};