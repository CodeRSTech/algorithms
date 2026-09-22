function DFSExplore(graph, source) {
  const stack = [[source, null]];
  const visited = [];
  let node;
  let prev;
  let i;
  let temp;
  for (i = 0; i < graph.length; i++) {
    visited.push(false);
  }

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

const visited = DFSExplore(G, 0);
let check = true;
for (let i = 0; i < visited.length; i++) check &= visited[i];

if (check) {
  console.log('The Graph is CONNECTED');
} else {
  console.log('The Graph is NOT CONNECTED');
}
