
var MinStack = function () {
  this.stack = [];
  this.min = {
  };
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.min[this.stack.length] = this.min[this.stack.length - 1] !== undefined ? Math.min(this.min[this.stack.length - 1], val) : val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  delete this.min[this.stack.length + 1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.stack.length];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */