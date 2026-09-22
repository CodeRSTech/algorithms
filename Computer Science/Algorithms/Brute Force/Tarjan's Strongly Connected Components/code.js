const G = [
  [0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0],
];

const disc = new Array(G.length);
const low = new Array(G.length);
const stackMember = new Array(G.length);
const st = [];
const carry = { time: 0 };

for (let i = 0; i < G.length; i++) {
  disc[i] = -1;
  low[i] = -1;
  stackMember[i] = false;
}

function SCCVertex(u, disc, low, st, stackMember, carry) {

  disc[u] = ++carry.time;

  low[u] = carry.time;

  st.push(u);

  stackMember[u] = true;

  // Go through all vertices adjacent to this
  for (let v = 0; v < G[u].length; v++) {
    if (G[u][v]) {
      // If v is not visited yet, then recur for it
      if (disc[v] === -1) {
        SCCVertex(v, disc, low, st, stackMember, carry);

        // Check if the subtree rooted with 'v' has a
        // connection to one of the ancestors of 'u'
        low[u] = Math.min(low[u], low[v]);
        
      }

      // Update low value of 'u' only of 'v' is still in stack
      // (i.e. it's a back edge, not cross edge).
      else if (stackMember[v] === true) {
        low[u] = Math.min(low[u], disc[v]);
        
      }
    }
  }

  // head node found, pop the stack and print an SCC
  let w = 0; // To store stack extracted vertices
  if (low[u] === disc[u]) {
    while (st[st.length - 1] !== u) {
      w = st.pop();

      stackMember[w] = false;
      
    }

    w = st.pop();

    stackMember[w] = false;
    
  }
}

for (let i = 0; i < G.length; i++) {
  if (disc[i] === -1) {
    SCCVertex(i, disc, low, st, stackMember, carry);
  }
}
