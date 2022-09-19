/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let hash = {};

  for (let i = 0; i < paths.length; i++) {
    let group = paths[i].split(' ');
    let dir = group[0];

    for (let j = 1; j < group.length; j++) {
      let content = group[j].match(/\(.+\)/);
      if (hash[content]) {
        hash[content].push(dir + "/" + group[j].replace(/\(.+\)/, ''));
      } else {
        hash[content] = [dir + "/" + group[j].replace(/\(.+\)/, '')];
      }
    }
  }

  return Object.values(hash).filter((group) => group.length > 1);
};
