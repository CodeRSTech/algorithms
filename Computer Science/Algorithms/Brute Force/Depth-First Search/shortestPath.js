function DFS(node, parent, weight) { // node = current node, parent = previous node
  if (minWeight < weight) return;
  if (node === e) {
    
    if (minWeight > weight) {
      minWeight = weight;
    }
    
    return;
  }
  D[node] = true; // label current node as discovered
  
  for (let i = 0; i < G[node].length; i++) {
    if (G[node][i]) { // if the path from current node to the i-th node exists
      if (!D[i]) { // if the i-th node is not labeled as discovered
        DFS(i, node, weight + G[node][i]); // recursively call DFS
      }
    }
  }
  D[node] = false; // label current node as undiscovered
  
}

const s = Randomize.Integer({ min: 0, max: G.length - 1 }); // s = start node
let e; // e = end node
do {
  e = Randomize.Integer({ min: 0, max: G.length - 1 });
} while (s === e);
const MAX_VALUE = Infinity;
let minWeight = MAX_VALUE;

console.log(`finding the shortest path from ${s} to ${e}`);

let D = []; // D[i] indicates whether the i-th node is discovered or not
for (let i = 0; i < G.length; i++) D.push(false);
DFS(s, undefined, 0);

if (minWeight === MAX_VALUE) {
  console.log(`there is no path from ${s} to ${e}`);
} else {
  console.log(`the shortest path from ${s} to ${e} is ${minWeight}`);
}
