/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s.length < 2) {
    return s;
  }
  s = s.split('');
  let l = 0;
  let r = 1;

  while (r < s.length) {
    let left = s[l];
    let right = s[r];

    if (left == '_') {
      l++;
      continue;
    }

    if (right == '_') {
      r++;
      continue;
    }

    if (r == l) {
      r++;
      continue;
    }

    if (left == right) {
      l++;
      r++;
      continue;
    }

    if (left.toLowerCase() == right || right.toLowerCase() == left) {
      s[l] = '_';
      s[r] = '_';

      while (s[l] == "_" && l > 0) {
        l--;
      }
      while (s[r] == "_" && r < s.length) {
        r++;
      }
    } else {
      l++;
      r++;
    }
  }

  return s.filter((letter) => letter != '_').join('');
};