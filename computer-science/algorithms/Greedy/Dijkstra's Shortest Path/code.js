const G = Randomize.Graph({ N: 5, ratio: 1, directed: false, weighted: true });
const MAX_VALUE = Infinity;
const S = []; // S[end] returns the distance from start node to end node
for (let i = 0; i < G.length; i++) S[i] = MAX_VALUE;

function Dijkstra(start, end) {
  let minIndex;
  let minDistance;
  const D = []; // D[i] indicates whether the i-th node is discovered or not
  for (let i = 0; i < G.length; i++) D.push(false);
  S[start] = 0; // Starting node is at distance 0 from itself
  
  let k = G.length;
  while (k--) {
    // Finding a node with the shortest distance from S[minIndex]
    minDistance = MAX_VALUE;
    for (let i = 0; i < G.length; i++) {
      if (S[i] < minDistance && !D[i]) {
        minDistance = S[i];
        minIndex = i;
      }
    }
    if (minDistance === MAX_VALUE) break; // If there is no edge from current node, jump out of loop
    D[minIndex] = true;
    
    // For every unvisited neighbour of current node, we check
    // whether the path to it is shorter if going over the current node
    for (let i = 0; i < G.length; i++) {
      if (G[minIndex][i] && S[i] > S[minIndex] + G[minIndex][i]) {
        S[i] = S[minIndex] + G[minIndex][i];
        
      }
    }
    
  }
  
  if (S[end] === MAX_VALUE) {
    console.log(`there is no path from ${start} to ${end}`);
  } else {
    console.log(`the shortest path from ${start} to ${end} is ${S[end]}`);
  }
  
}

const s = Randomize.Integer({ min: 0, max: G.length - 1 }); // s = start node
let e; // e = end node
do {
  e = Randomize.Integer({ min: 0, max: G.length - 1 });
} while (s === e);

console.log(`finding the shortest path from ${s} to ${e}`);
Tracer.delay();

Dijkstra(s, e);
