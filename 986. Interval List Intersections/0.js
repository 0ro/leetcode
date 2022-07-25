/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let ans = [];
  let a = 0;
  let b = 0;

  while (firstList[a] && secondList[b]) {
    let [startA, endA] = firstList[a];
    let [startB, endB] = secondList[b];

    if (startA > endB) {
      b++
    } else if (endA < startB) {
      a++;
    } else if (startA >= startB && endA >= endB) {
      ans.push([startA, endB]);
      b++;
    } else if (startA >= startB && endA <= endB) {
      ans.push([startA, endA]);
      a++;
    } else if (startA <= startB && endA >= endB) {
      ans.push([startB, endB])
      b++;
    } else if (startA <= startB && endA <= endB) {
      ans.push([startB, endA]);
      a++;
    }
  }

  return ans;
};