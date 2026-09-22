const G = [
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0], // <-- replace latest 0 with 1 to make G not biparted
  [1, 0, 0, 0, 0],
];

function BFSCheckBipartiteness(s) {
  const Q = [];

  // Create a new matrix to set colors (0,1)
  const Colors = [];
  for (let _i = 0; _i < G.length; _i++) Colors[_i] = -1;

  Colors[s] = 1;

  Q.push(s); // add start node to queue

  while (Q.length > 0) {
    const node = Q.shift(); // dequeue

    for (let i = 0; i < G[node].length; i++) {
      if (G[node][i]) {
        if (Colors[i] === -1) {
          Colors[i] = 1 - Colors[node];

          Q.push(i);
          
        } else if (Colors[i] === Colors[node]) {
          
          console.log('Graph is not biparted');
          
          return false;
        }
      }
    }
  }

  console.log('Graph is biparted');
  
  return true;
}

BFSCheckBipartiteness(0);
