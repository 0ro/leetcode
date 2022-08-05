/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let operators = {
    "*": 1,
    "-": 1,
    "+": 1,
    "/": 1,
  }

  for (let i = 0; i < tokens.length; i++) {
    if (operators[tokens[i]]) {
      let second = stack.pop();
      let first = stack.pop();
      let result = null;

      switch (tokens[i]) {
        case '+':
          result = first + second;
          break;
        case '-':
          result = first - second;
          break;
        case '*':
          result = first * second;
          break;
        case '/':
          result = parseInt(first / second);
          break;
      }
      stack.push(result);
    } else {
      stack.push(+tokens[i]);
    }
  }

  return stack[0]
};