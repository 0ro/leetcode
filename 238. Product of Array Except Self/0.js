/*
a[1]*a[2]*a[3]*a[4] => 0
a[0]*a[2]*a[3]*a[4] => 1
a[0]*a[1]*a[3]*a[4] => 2
a[0]*a[1]*a[2]*a[4] => 3
a[0]*a[1]*a[2]*a[3] => 4

1                   a[1]*a[2]*a[3]*a[4] => 0
a[0]                a[2]*a[3]*a[4] => 1
a[0]*a[1]           a[3]*a[4] => 2
a[0]*a[1]*a[2]      a[4] =>3
a[0]*a[1]*a[2]*a[3] 1 =>4
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let suffix = (nums[i - 1] ?? 1) * (ans[i - 1] ?? 1);
    ans[i] = suffix;
  }
  let prefix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    prefix = prefix * (nums[j + 1] ?? 1);
    let suffix = ans[j]
    ans[j] = suffix * prefix;
  }
  return ans;
};
