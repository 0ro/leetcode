/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  function getOverlap(a1, a2, b1, b2) {
    let res = Math.min(a2, b2) - Math.max(a1, b1);
    return res > 0 ? res : 0;
  }

  function getArea(x1, y1, x2, y2) {
    return (x2 - x1) * (y2 - y1);
  }

  return getArea(ax1, ay1, ax2, ay2) + getArea(bx1, by1, bx2, by2) - getOverlap(ax1, ax2, bx1, bx2) * getOverlap(ay1, ay2, by1, by2);
};