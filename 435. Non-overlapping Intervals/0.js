/**
 * @param {number[][]} intervals
 * @return {number}
 Greedy
 */

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] > b[0] ? 1 : -1);
  let ans = 0;
  let left = 0;
  let right = 1;

  while (right < intervals.length) {
    if (intervals[left][1] > intervals[right][0]) {
      if (intervals[left][1] >= intervals[right][1]) {
        left = right;
      }
      ans++;
      right++;
    } else {
      left = right;
      right++;
    }
  }

  return ans;
};