function BFS() {
  const W = []; // W[i] indicates the length of the shortest path from start node to the i-th node
  const Q = [];
  let i;
  for (i = 0; i < G.length; i++) {
    W.push(MAX_VALUE);
    
  }
  W[s] = 0;
  Q.push(s); // add start node to queue
  
  while (Q.length > 0) {
    const node = Q.shift(); // dequeue
    for (i = 0; i < G[node].length; i++) {
      if (G[node][i]) { // if the edge from current node to the i-th node exists
        if (W[i] > W[node] + G[node][i]) { // if current path is shorter than the previously shortest path
          W[i] = W[node] + G[node][i]; // update the length of the shortest path
          Q.push(i); // add child node to queue
          
        }
      }
    }
  }
  return W[e];
}

let s = Randomize.Integer({ min: 0, max: G.length - 1 }); // s = start node
let e; // e = start node
do {
  e = Randomize.Integer({ min: 0, max: G.length - 1 });
} while (s === e);
let MAX_VALUE = 0x7fffffff;

console.log(`finding the shortest path from ${s} to ${e}`);

const minWeight = BFS(s);

if (minWeight === MAX_VALUE) {
  console.log(`there is no path from ${s} to ${e}`);
} else {
  console.log(`the shortest path from ${s} to ${e} is ${minWeight}`);
}
