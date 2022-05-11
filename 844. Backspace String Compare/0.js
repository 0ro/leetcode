/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const backspaceCompare = function (s, t) {
  let ans = true;
  let i = s.length - 1, j = t.length - 1;
  let skipCount1 = 0;
  let skipCount2 = 0;

  while (i >= 0 || j >= 0) {
    let a = s[i];
    let b = t[j];

    if (a === "#") {
      i--;
      skipCount1++;
      continue;
    }
    if (b === "#") {
      j--;
      skipCount2++;
      continue;
    }
    if (skipCount1) {
      i--;
      skipCount1--;
      continue;
    }
    if (skipCount2) {
      j--;
      skipCount2--;
      continue;
    }
    if (a !== b) {
      ans = false;
      break;
    }
    i--;
    j--;
  }
  return ans;
};