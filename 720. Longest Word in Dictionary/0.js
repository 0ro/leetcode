/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
  let hash = {};
  let ans = '';
  for (let i = 0; i < words.length; i++) {
    hash[words[i]] = 1;
  }
  words.sort((a,b) => a > b ? 1 : -1);

  for (let i = words.length -1; i >= 0; i--) {
    let word = words[i];
    if (word.length < ans.length) {
      continue; 
    }
    let isValid = true;

    for (let j = 0; j < word.length; j++) {
      if (!hash[word.slice(0,j+1)]) {
        isValid = false;
        break;
      }
    }
    if (isValid && ans.length <= word.length) {
      ans = word; 
    }
  }

  return ans;
};
