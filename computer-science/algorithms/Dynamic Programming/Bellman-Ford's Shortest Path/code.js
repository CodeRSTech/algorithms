function BELLMAN_FORD(src, dest) {
  const weights = new Array(G.length);
  let i;
  let j;

  for (i = 0; i < G.length; i++) {
    weights[i] = MAX_VALUE;
    
  }
  weights[src] = 0;

  console.log(`Initializing weights to: [${weights}]`);
  console.log('');

  // begin BF algorithm execution
  let k = G.length;
  while (k--) {
    
    console.log(`Iteration: ${G.length - k}`);
    console.log('------------------------------------------------------------------');

    for (i = 0; i < G.length; i++) {
      for (j = 0; j < G.length; j++) {
        if (G[i][j]) { // proceed to relax Edges only if a particular weight !== 0 (0 represents no edge)
          if (weights[j] > (weights[i] + G[i][j])) {
            weights[j] = weights[i] + G[i][j];
            
            console.log(`weights[${j}] = weights[${i}] + ${G[i][j]}`);
            
          }
          
        }
      }
    }

    console.log(`updated weights: [${weights.join(', ')}]`);
    console.log('');
    
  }

  // check for cycle
  console.log('checking for cycle');
  for (i = 0; i < G.length; i++) {
    for (j = 0; j < G.length; j++) {
      if (G[i][j]) {
        if (weights[j] > (weights[i] + G[i][j])) {
          
          console.log(`A cycle was detected: weights[${j}] > weights[${i}] + ${G[i][j]}`);
          
          return (MAX_VALUE);
        }
      }
    }
  }

  console.log(`No cycles detected. Final weights for the source ${src} are: [${weights}]`);

  return weights[dest];
}

const src = Randomize.Integer({ min: 0, max: G.length - 1 });
let dest;
let MAX_VALUE = 0x7fffffff;
let minWeight;

/*
 src = start node
 dest = start node (but will eventually at as the end node)
 */

do {
  dest = Randomize.Integer({ min: 0, max: G.length - 1 });
}
while (src === dest);

console.log(`finding the shortest path from ${src} to ${dest}`);

minWeight = BELLMAN_FORD(src, dest);

if (minWeight === MAX_VALUE) {
  console.log(`there is no path from ${src} to ${dest}`);
} else {
  console.log(`the shortest path from ${src} to ${dest} is ${minWeight}`);
}
