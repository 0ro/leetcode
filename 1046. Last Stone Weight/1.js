/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  let q = new MaxPriorityQueue();
  
  for (let i = stones.length -1; i >= 0; i--) {
    q.enqueue(stones[i]);
  }
  
  while(q.size() > 1) {
    let x = q.dequeue();
    let y = q.dequeue();

    if (x.priority > y.priority || x.priority  < y.priority ) {
      q.enqueue(Math.abs(x.priority -y.priority ));
    }
  }
  
  return q.front()?.priority ?? 0;
};
