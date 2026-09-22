function FloydWarshall() {
  // Finds the shortest path between all nodes
  const S = new Array(G.length);
  for (let i = 0; i < G.length; i++) S[i] = new Array(G.length);
  for (let i = 0; i < G.length; i++) {
    for (let j = 0; j < G.length; j++) {
      // Distance to self is always 0
      if (i === j) S[i][i] = 0;
      // Distance between connected nodes is their weight
      else if (G[i][j] > 0) {
        S[i][j] = G[i][j];
      }// Else we don't know the distance and we set it to infinity
      else S[i][j] = MAX_VALUE;
    }
  }
  // If there is a shorter path using k, use it instead
  for (let k = 0; k < G.length; k++) {
    for (let i = 0; i < G.length; i++) {
      if (k === i) continue;
      
      for (let j = 0; j < G.length; j++) {
        if (i === j || j === k) continue;
        
        if (S[i][j] > S[i][k] + S[k][j]) {
          
          S[i][j] = S[i][k] + S[k][j];
          
        }
        
      }
      
    }
  }
  
  for (let i = 0; i < G.length; i++) {
    for (let j = 0; j < G.length; j++) {
      if (S[i][j] === MAX_VALUE) console.log(`there is no path from ${i} to ${j}`);
      else console.log(`the shortest path from ${i} to ${j} is ${S[i][j]}`);
    }
  }
  
}

let MAX_VALUE = Infinity;

console.log('finding the shortest paths from and to all nodes');

FloydWarshall();
