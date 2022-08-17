const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let seen = {};
  for (let i = 0; i < words.length; i++) {
    let decode = '';
    for (let j = 0; j < words[i].length; j++) {
      let index = words[i].charCodeAt(j) - 97
      decode += morse[index];
    }
    seen[decode] = 1;
  }

  return Object.keys(seen).length;
};
