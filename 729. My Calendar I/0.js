
var MyCalendar = function() {
  // TODO: init event list
  this.events = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  let ans = this._hasIntersections([start,end])  

  if (!ans) {
    // TOOD: add to event list 
    this._addEvent([start, end])
  }

  return !ans;
};


// a.       b
//      c        d

//           a.       b
//      c        d

//   a.             b
//       c.     d

//          a.   b
//       c.           d


MyCalendar.prototype._hasIntersections = function(event) {
  let [a,b] = event;
  for (let i = 0; i < this.events.length; i++) {
    let [c,d] = this.events[i];
    if (c > a && c < b) {
      return true; 
    } else if (a > c && a < d) {
      return true; 
    } else if (a <= c && d <= b) {
      return true; 
    } else if (a >= c && b <= d) {
      return true;
    }
  }
  return false;
}

MyCalendar.prototype._addEvent = function(event) {
  this.events.push(event);
}

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */