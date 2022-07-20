/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (hash[t[j]]) {
      hash[t[j]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};