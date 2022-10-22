/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let ans = '';
  let map = new Map();
  let stat = new Map();

  for (let i = 0; i < t.length; i++) {
    stat.set(t[i], (stat.get(t[i]) ?? 0) + 1);
  }

  function isSubstring() {
    for (let [key, value] of stat) {
      if ((map.get(key) ?? 0) < value) {
        return false;
      }
    }
    return true;
  }

  while (r < s.length) {
    map.set(s[r], (map.get(s[r]) ?? 0) + 1);

    while (isSubstring()) {
      let str = s.slice(l, r + 1);
      ans = ans.length > 0 ? ans.length > (r + 1 - l) ? str : ans : str;

      let val = map.get(s[l]);
      val > 1 ? map.set(s[l], val - 1) : map.delete(s[l]);
      l++;
    }

    r++;
  }

  return ans;
};