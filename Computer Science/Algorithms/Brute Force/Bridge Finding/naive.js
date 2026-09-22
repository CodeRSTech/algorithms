const G = [
  [0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0],
];

// Depth First Search Exploration Algorithm to test connectedness of the Graph (see Graph Algorithms/DFS/exploration), without the tracer & logger commands
function DFSExplore(graph, source) {
  const stack = [[source, null]];
  const visited = {};
  let node;
  let prev;
  let i;
  let temp;

  while (stack.length > 0) {
    temp = stack.pop();
    node = temp[0];
    prev = temp[1];

    if (!visited[node]) {
      visited[node] = true;

      for (i = 0; i < graph.length; i++) {
        if (graph[node][i]) {
          stack.push([i, node]);
        }
      }
    }
  }

  return visited;
}

function findBridges(graph) {
  let tempGraph;
  const bridges = [];
  let visited;

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j]) { // check if an edge exists

        tempGraph = JSON.parse(JSON.stringify(graph));
        tempGraph[i][j] = 0;
        tempGraph[j][i] = 0;
        visited = DFSExplore(tempGraph, 0);

        if (Object.keys(visited).length === graph.length) {
          
          console.log('Graph is CONNECTED. Edge is NOT a bridge');
          
        } else {
          
          console.log('Graph is DISCONNECTED. Edge IS a bridge');
          
          bridges.push([i, j]);
        }
      }
    }
  }

  return bridges;
}

const bridges = findBridges(G);

console.log('The bridges are: ');
for (const i in bridges) {
  console.log(`${bridges[i][0]} to ${bridges[i][1]}`);
}
console.log('NOTE: A bridge is both ways, i.e., from A to B and from B to A, because this is an Undirected Graph');
