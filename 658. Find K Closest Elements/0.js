/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}

1 2 3 4 5 
  l   r 

k = 2
x = 3


4 - 3

 */
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - 1;

  while (r - l >= k) {
    if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
      r--;
    } else {
      l++
    }
  }

  return arr.slice(l, r + 1);
};
