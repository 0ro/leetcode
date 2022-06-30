/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let b = s[i];

    if (b == '(') {
      stack.push(')');
    } else if (b == '[') {
      stack.push(']');
    } else if (b == '{') {
      stack.push('}');
    } else {
      let lastElement = stack.pop();
      if (lastElement !== b) {
        return false;
      }
    }
  }

  return !stack.length;
};