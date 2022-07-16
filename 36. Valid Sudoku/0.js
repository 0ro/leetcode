/**
 * @param {character[][]} board
 * @return {boolean}




 */
var isValidSudoku = function (board) {
  let ans = true;
  let arr = new Array(9).fill(0);

  let rows = board;
  let columns = arr.map(() => []);
  let squares = arr.map(() => []);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      columns[j][i] = board[i][j];
      squares[Math.floor(i / 3) * 3 + Math.floor((j) / 3)].push(board[i][j]);
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!isValid(rows[i]) || !isValid(columns[i]) || !isValid(squares[i])) {
      return false;
    }
  }

  return true;
};

function isValid(array) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] != '.') {
      if (hash[array[i]]) {
        return false;
      }
      hash[array[i]] = true;
    }
  }
  return true;
}