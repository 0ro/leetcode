/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let max = 1;
  let l = 0;
  let r = 1;
  let b1Val = fruits[0];
  let b2Val = null;

  while (r < fruits.length) {
    let val = fruits[r];

    if (b2Val == null && b2Val != val) {
      b2Val = val;
    } else if (val != b1Val && val != b2Val) {
      l = r - 1;
      while (fruits[l] == fruits[l - 1]) {
        l--;
      }
      b1Val = fruits[l];
      b2Val = val;
    }

    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
};