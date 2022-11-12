
var MedianFinder = function () {
  this.left = new MaxPriorityQueue();
  this.right = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let leftFront = this.left.front()?.element;
  let rightFront = this.right.front()?.element;
  let leftSize = this.left.size();
  let rightSize = this.right.size();

  if (num < leftFront) {
    if (leftSize > rightSize) {
      this.right.enqueue(this.left.dequeue().element);
    }
    this.left.enqueue(num);
  } else if (num > rightFront) {
    if (rightSize > leftSize) {
      this.left.enqueue(this.right.dequeue().element);
    }
    this.right.enqueue(num);
  } else { // between
    if (leftSize < rightSize) {
      this.left.enqueue(num);
    } else {
      this.right.enqueue(num);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let leftFront = this.left.front()?.element;
  let rightFront = this.right.front()?.element;
  let leftSize = this.left.size();
  let rightSize = this.right.size();

  if (leftSize == rightSize) {
    return (leftFront + rightFront) / 2;
  } else {
    if (leftSize > rightSize) {
      return leftFront;
    } else {
      return rightFront;
    }
  }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */