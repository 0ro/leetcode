/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}

max pq with size x
first number is smallest x-th

 */
var kthSmallest = function (matrix, k) {
  let minpq = new MaxPriorityQueue();
  let flat = matrix.flat();
  for (let i = 0; i < flat.length; i++) {
    minpq.enqueue(flat[i]);
    if (minpq.size() > k) {
      minpq.dequeue();
    }
  }

  return minpq.front().element;
};