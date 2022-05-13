/*
two phases
1. Find intersection with fast and slow pointers (until they're equal in cycle)
2. Give second chance to slow pointer and speed down the fast one. Because steps from intersection position to entrance and from begininng to entrance are equal (F = X)


*/
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]]
  } while (slow !== fast)

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};