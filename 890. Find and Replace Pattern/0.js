/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let patternToWord = {};
    let wordToPattern = {};
    let hasMatch = true;

    for (let j = 0; j < word.length; j++) {
      if (!patternToWord[pattern[j]]) {
        patternToWord[pattern[j]] = word[j];
      }
      if (!wordToPattern[word[j]]) {
        wordToPattern[word[j]] = pattern[j];
      }

      if (pattern[j] != wordToPattern[patternToWord[pattern[j]]] || patternToWord[pattern[j]] != word[j]) {
        hasMatch = false; 
        break;
      }
    }

    if (hasMatch) {
      ans.push(word);
    }
  } 

  return ans;
};