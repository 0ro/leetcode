/**
 * @param {number} k
 * @param {number[]} nums

                    4 
               1.             2
           3       4.       5     6
         7.  8   9.  10 


    1
   0

 */

class MinHeap {
  constructor(arr, cap) {
    this.capacity = cap;
    this.items = [];
    this.build(arr);
  }

  _getParentOf(index) {
    return Math.ceil(index / 2 - 1);
  }

  _getLeftChildOf(index) {
    return index * 2 + 1;
  }

  _getRightChildOf(index) {
    return index * 2 + 2;
  }
  _swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
  }

  build(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
  }

  push(item) {
    this.items[this.items.length] = item;
    this.heapifyUp();
    if (this.items.length > this.capacity) {
      this.shift();
    }
    return this.peak();
  }

  shift() {
    const item = this.items[0];

    this.items[0] = this.items.pop();

    this.heapifyDown();

    return item;
  }

  peak() {
    return this.items[0];
  }

  heapifyUp() {
    let index = this.items.length - 1;
    let parentIndex = this._getParentOf(index);

    while (parentIndex !== -1 && this.items[index] < this.items[parentIndex]) {
      this._swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this._getParentOf(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let leftIndex = this._getLeftChildOf(index);
    let rightIndex = this._getRightChildOf(index);

    while (this.items[leftIndex] !== undefined && (this.items[leftIndex] < this.items[index] || this.items[rightIndex] < this.items[index])) {
      if (this.items[leftIndex] !== undefined && this.items[rightIndex] !== undefined && this.items[leftIndex] < this.items[rightIndex]) {
        this._swap(leftIndex, index);
        index = leftIndex;
        leftIndex = this._getLeftChildOf(index);
        rightIndex = this._getRightChildOf(index);
      } else if (
        this.items[leftIndex] !== undefined && this.items[rightIndex] !== undefined && this.items[leftIndex] > this.items[rightIndex]
      ) {
        this._swap(rightIndex, index);
        index = rightIndex;
        leftIndex = this._getLeftChildOf(index);
        rightIndex = this._getRightChildOf(index);
      } else {
        this._swap(leftIndex, index);
        index = leftIndex;
        leftIndex = this._getLeftChildOf(index);
        rightIndex = this._getRightChildOf(index);
      }
    }
  }
}


var KthLargest = function (k, nums) {
  this.heap = new MinHeap(nums, k);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  return this.heap.push(val);
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */