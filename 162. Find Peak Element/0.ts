export function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  let m = Math.floor((l + r) / 2);

  while (l < r) {
    if (nums[m] < nums[m + 1]) {
      l = m + 1;
      m = Math.floor((l + r) / 2);
    } else {
      r = m;
      m = Math.floor((l + r) / 2);
    }
  }
  return l;
};