/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 [7,7,8,8,8,8,9,10]
  0 1 2 3 4 5 6 7 
  l     m        r
  [5,7,7,8,8,10]
       m l l  r

 */
var searchRange = function (nums, target) {
  let first = findFirst(nums, target);
  let last = findLast(nums, target);
  return [first, last]
};

function findFirst(nums, target) {
  let i = -1;
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] >= target) {
      r = m - 1;
      if (nums[m] == target) {
        i = m;
      }
    } else {
      l = m + 1;
    }
  }

  return i;
}

function findLast(nums, target) {
  let i = -1;
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] <= target) {
      l = m + 1;
      if (nums[m] == target) {
        i = m;
      }
    } else {
      r = m - 1;
    }
  }

  return i;
}