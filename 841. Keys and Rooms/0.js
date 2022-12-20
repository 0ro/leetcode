/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Set();
  let queue = [0];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let room = queue.shift();
      let keys = rooms[room];

      if (visited.has(room)) {
        continue;
      }
      visited.add(room);

      for (let j = 0; j < keys.length; j++) {
        queue.push(keys[j]);
      }
    }
  }

  return rooms.length == visited.size;
}