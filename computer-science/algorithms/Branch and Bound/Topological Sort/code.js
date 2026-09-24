// G[i][j] indicates whether the path from the i-th node to the j-th node exists or not. NOTE: The graph must be Directed-Acyclic
const G = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 0],
];

const inDegrees = Array(...Array(G.length)).map(Number.prototype.valueOf, 0); // create an Array of G.length number of 0s
const Q = [];
let iter = 0;
let i;

console.log('Calculating in-degrees for each Node...');

for (let currNode = 0; currNode < G.length; currNode++) {
  for (let currNodeNeighbor = 0; currNodeNeighbor < G.length; currNodeNeighbor++) {
    if (G[currNode][currNodeNeighbor]) {
      
      inDegrees[currNodeNeighbor]++;
      
    }
  }
}

console.log(`Done. In-Degrees are: [ ${String(inDegrees)} ]`);
console.log('');

console.log('Initializing queue with all the sources (nodes with no incoming edges)');

inDegrees.map((indegrees, node) => {
  
  if (!indegrees) {
    
    console.log(`${node} is a source`);
    
    Q.push(node);
  }
  
});

console.log(`Done. Initial State of Queue: [ ${String(Q)} ]`);
console.log('');

// begin topological sort (kahn)
while (Q.length > 0) {
  
  console.log(`Iteration #${iter}. Queue state: [ ${String(Q)} ]`);
  
  const currNode = Q.shift();

  for (i = 0; i < G.length; i++) {
    if (G[currNode][i]) {
      
      inDegrees[i]--;

      if (!inDegrees[i]) {
        
        console.log(`${i}'s in-degree is now 0. Enqueuing ${i}`);
        
        Q.push(i);
      }
    }
  }

  console.log(`In-degrees are: [${String(inDegrees)} ]`);
  console.log('-------------------------------------------------------------------');

  iter++;
}
