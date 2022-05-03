function maxSubArray(nums: number[]): number {
  let largestSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    currentSum = Math.max(num + currentSum, num)
    largestSum = Math.max(currentSum, largestSum);
  }

  return largestSum;
};