function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
  }
  let ans = [], i = 0, j = nums.length - 1, k = nums.length - 1;
  while (i <= j) {
    let left = nums[i];
    let right = nums[j];

    if (right > left) {
      ans[k] = right
      j--;
    } else {
      ans[k] = left;
      i++;
    }
    k--;
  }
  return ans;
};