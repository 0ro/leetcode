export function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1;
  let middle = nums.length >> 1

  while (left <= right) {
    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
    middle = (left + right) >> 1
  }

  return -1;
};