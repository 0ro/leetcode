/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rowIndex = searchRow(matrix, target);
  if (rowIndex < 0) {
    return false;
  }
  let columnIndex = search(matrix[rowIndex], target);

  if (columnIndex < 0) {
    return false;
  }
  return true;
};

function searchRow(matrix, target) {
  let l = 0;
  let r = matrix.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let start = matrix[m][0];
    let end = matrix[m][matrix[m].length - 1];

    if (target >= start && target <= end) {
      return m;
    } else if (target < start) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}

function search(array, target) {
  let l = 0;
  let r = array.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (array[m] == target) {
      return m;
    } else if (target < array[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}