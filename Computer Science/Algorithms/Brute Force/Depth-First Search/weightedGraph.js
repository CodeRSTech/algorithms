let D; // D[i] indicates whether the i-th node is discovered or not

function DFS(node, parent, weight) { // node = current node, parent = previous node
  
  D[node] = true; // label current node as discovered
  for (let i = 0; i < G[node].length; i++) {
    if (G[node][i]) { // if the edge from current node to the i-th node exists
      if (!D[i]) { // if the i-th node is not labeled as discovered
        DFS(i, node, weight + G[node][i]); // recursively call DFS
      }
    }
  }
  D[node] = false; // label current node as undiscovered
  
}

for (let i = 0; i < G.length; i++) { // start from every node
  
  console.log(`start from ${i}`);
  
  D = [];
  for (let j = 0; j < G.length; j++) D.push(false);
  DFS(i, undefined, 0);
}
