/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }

  let hash1 = {};
  let hash2 = {};

  for (let i = 0; i < word1.length; i++) {
    hash1[word1[i]] = (hash1[word1[i]] || 0) + 1;
  }

  for (let i = 0; i < word2.length; i++) {
    hash2[word2[i]] = (hash2[word2[i]] || 0) + 1;
  }

  let set1 = new Set(Object.keys(hash1));
  let set2 = new Set(Object.keys(hash2));

  if (set1.size != set2.size) {
    return false;
  }

  for (let value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }

  let nums1 = Object.values(hash1).sort((a, b) => a - b);
  let nums2 = Object.values(hash2).sort((a, b) => a - b);

  if (nums1.length != nums2.length) {
    return false;
  }

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] != nums2[i]) {
      return false;
    }
  }

  return true;
};