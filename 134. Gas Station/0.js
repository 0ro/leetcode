/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let l = 0;
  let r = 0;

  let acc = 0;

  let len = gas.length;

  while ((r < gas.length * 2) && (r - l < gas.length)) {
    if (acc >= 0) {
      acc += (gas[r % len] - cost[r % len]);
      r++;
    } else {
      acc -= (gas[l % len] - cost[l % len]);
      l++;
    }
  }
  return r - l == len && acc > -1 ? l : -1;
}