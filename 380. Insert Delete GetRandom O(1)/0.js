
var RandomizedSet = function () {
  this.hash = {};
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash[val] == undefined) {
    this.arr.push(val);
    this.hash[val] = this.arr.length - 1;

    return true;
  }
  return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash[val] != undefined) {
    let index = this.hash[val];

    this.arr[index] = this.arr[this.arr.length - 1];

    this.hash[this.arr[this.arr.length - 1]] = index;

    this.arr.pop();

    delete this.hash[val];

    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.arr.length);

  return this.arr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */