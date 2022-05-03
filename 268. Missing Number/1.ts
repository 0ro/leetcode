export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const rangeSum = (1 + n)*n/2;
  let sum = 0;
  for (const num of nums) {
    sum +=num;
  }
  return rangeSum - sum;
};