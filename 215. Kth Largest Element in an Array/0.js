/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function partition(arr, lo, hi) {
    let pivot = arr[Math.floor((lo + hi) / 2)];

    while (lo <= hi) {
      while (arr[lo] < pivot) {
        lo++;
      }
      while (arr[hi] > pivot) {
        hi--;
      }
      if (lo <= hi) {
        [arr[lo], arr[hi]] = [arr[hi], arr[lo]]
        lo++;
        hi--;
      }
    }
    return lo;
  }

  function qsort(arr, lo, hi, level) {
    if (lo < hi) {
      let index = partition(arr, lo, hi);
      if (index > (nums.length - k)) {
        qsort(arr, lo, index - 1, level + 1);
      } else {
        qsort(arr, index, hi, level + 1);
      }
    }
  }

  qsort(nums, 0, nums.length - 1, 0);

  return nums[nums.length - k]
};