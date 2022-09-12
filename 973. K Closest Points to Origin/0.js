/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  function getDistance(point) {
    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
  }

  let heap = new MinPriorityQueue({ priority: (bid) => bid.value })
  for (let i = 0; i < points.length; i++) {
    heap.enqueue({ value: -1 * getDistance(points[i]), point: points[i] });

    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  let ans = [];

  for (let i = 0; i < k; i++) {
    let el = heap.dequeue();

    ans.push(el.element.point);
  }

  return ans;
};