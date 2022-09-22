/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let ans = [];
  let po = new Array(heights.length).fill(0).map((_, index) => {
    return new Array(heights[0].length).fill(0);
  });
  let ao = new Array(heights.length).fill(0).map((_, index) => {
    return new Array(heights[0].length).fill(0);
  });

  function track(i, j, arr) {
    if (arr[i][j] == 1) {
      return;
    }
    arr[i][j] = 1;

    let dirs = [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]]
    for (let k = 0; k < dirs.length; k++) {
      let [x, y] = dirs[k];
      if (heights[i]?.[j] <= heights[x]?.[y]) {
        track(x, y, arr);
      }
    }
  }

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length && (i == 0 || j == 0); j++) {
      track(i, j, po);
    }
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    for (let j = heights[i].length - 1; j >= 0 && ((i == heights.length - 1) || (j == heights[i].length - 1)); j--) {
      track(i, j, ao);
    }
  }

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length; j++) {
      if (po[i][j] && ao[i][j]) {
        ans.push([i, j])
      }
    }
  }

  return ans;
};