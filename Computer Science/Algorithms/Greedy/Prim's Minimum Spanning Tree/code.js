function prim() {
  // Finds a tree so that there exists a path between
  // every two nodes while keeping the cost minimal
  let minD;

  let minI;
  let minJ;
  let sum = 0;
  const D = [];
  for (let i = 0; i < G.length; i++) D.push(0);
  D[0] = 1; // First node is visited
  for (let k = 0; k < G.length - 1; k++) { // Searching for k edges
    minD = Infinity;
    for (let i = 0; i < G.length; i++) {
      if (D[i]) // First node in an edge must be visited
      {
        for (let j = 0; j < G.length; j++) {
          if (!D[j] && G[i][j]) {
            
            // Second node must not be visited and must be connected to first node
            if (G[i][j] < minD) {
              // Searching for cheapest edge which satisfies requirements
              minD = G[i][j];
              minI = i;
              minJ = j;
            }
            
          }
        }
      }
    }
    
    D[minJ] = 1; // Visit second node and insert it into or tree
    sum += G[minI][minJ];
  }
  
  console.log(`The sum of all edges is: ${sum}`);
  
}

console.log('nodes that belong to minimum spanning tree are: ');

prim();
