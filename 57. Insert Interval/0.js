/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }
  let ans = [];
  let acc = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    let hasCurrentOverlap = hasOverlap(acc, intervals[i]);
    if (hasCurrentOverlap) {
      acc = [
        Math.min(acc[0], intervals[i][0]),
        Math.max(acc[1], intervals[i][1])
      ]
      intervals[i] = null;
    }
  }

  intervals = intervals.filter((interval) => interval !== null);

  let index = intervals.length;

  for (let i = 0; i < intervals.length; i++) {
    if (acc[0] <= intervals[i][0]) {
      index = i;
      break;
    }
  }

  intervals.splice(index, 0, acc)

  return intervals;
};

function hasOverlap(int1, int2) {
  if (!int1 || !int2) {
    return false;
  }
  return Math.max(int1[0], int2[0]) <= Math.min(int1[1], int2[1])
}