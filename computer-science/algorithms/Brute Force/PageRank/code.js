function filledArray(length, value) {
  return Array(...Array(length)).map(Number.prototype.valueOf, value);
}

/*
  PageRank Algorithm Version 2
  Equation:
    PR (X) = ( (1 - D)/N ) + D (Summation i->X (PR (I) / Out (i)))
  NOTE: Algorithm uses the recommended damping factor (D). Number of iterations is small because only a small Web of 5 Pages is simulated
*/

function arraySum(array) {
  return array.reduce(
    (sum, curr) =>
      sum + (curr ? 1 : 0) // if curr is 0 (no edge) or undefined (loop not allowed), sum remains unchanged
    , 0,
  );
}

function showOutgoingEdges(i) {
  G[i].forEach((edgeExists, j) => {
    if (edgeExists) {
      
    }
  });
}

// PRECOMPUTATIONS

console.log('Calculate Outgoing Edge Count for each Node');

(function calculateOEC() {
  G.forEach((relations, i) => {
    outgoingEdgeCounts[i] = arraySum(relations);
    showOutgoingEdges(i);

  });
}());

console.log('determine incoming nodes for each node');

(function determineIN() {
  for (let i = 0; i < G.length; i++) {
    for (let j = 0; j < G.length; j++) {
      if (G[i][j]) {
        // there's an edge FROM i TO j

        const nextPos = incomingNodes[j].indexOf(-1);
        incomingNodes[j][nextPos] = i;
        
      }
    }
  }

  // console.log ('All -1s will be removed from incoming node records, they are irrelevant');
  incomingNodes.forEach((arr) => {
    arr.splice(arr.indexOf(-1));
  });
}());

function updateRank(nodeIndex) {
  let inNodeSummation = 0;
  let result;

  console.log(`Updating rank of ${nodeIndex}`);
  console.log(`The incoming Nodes of ${nodeIndex} are being highlighted`);

  incomingNodes[nodeIndex].forEach((incoming, i) => {

    inNodeSummation += (ranks[incoming] / outgoingEdgeCounts[incoming]);

  });
  
  console.log(`In-Node summation of ${nodeIndex} = ${inNodeSummation}`);

  result = ((1 - damping) / G.length) + (damping * inNodeSummation); // notice the subtle difference between equations of Basic PR & PR version 2 (divide by N)
  
  console.log(`Therefore, using Equation, new rank of ${nodeIndex} = ${result}`);
  
  return result;
}

let damping = 0.85;
let iterations = 7;
const initialRank = 1.0;

console.log(`Initialized all Page ranks to ${initialRank}`);

ranks = filledArray(G.length, initialRank);

console.log('Begin execution of PageRank Version #1');
console.log('Equation used: PR (X) = (1 - D) + D (In-Node-Summation i->X (PR (I) / Out (i)))');
console.log('D = Damping Factor, PR (X) = Page rank of Node X, i = the ith In-Node of X, Out (i) = outgoing Edge Count of i');
console.log('');

while (iterations--) {
  for (let node = 0; node < ranks.length; node++) {
    ranks[node] = updateRank(node);
    
  }
}

console.log('Page Ranks have been converged to.');
ranks.forEach((rank, node) => {
  console.log(`Rank of Node #${node} = ${rank}`);
});
console.log('Done');
