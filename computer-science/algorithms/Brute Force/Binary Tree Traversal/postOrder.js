const G = [ // G[i][j] indicates whether the path from the i-th node to the j-th node exists or not
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

const T = [ // mapping to G as a binary tree , [i][0] indicates left child, [i][1] indicates right child
  [-1, -1],
  [0, 2],
  [-1, -1],
  [1, 4],
  [-1, -1],
  [3, 8],
  [-1, 7],
  [-1, -1],
  [6, 10],
  [-1, -1],
  [9, -1],
];

let index = 0;

function postOrder(root, parent) {
  if (root === -1) {
    
    console.log('No more nodes. Backtracking.');
    Tracer.delay();
    
    return;
  }

  postOrder(T[root][0], root);

  console.log(` Going right from ${root}`);
  Tracer.delay();
  
  postOrder(T[root][1], root);

}

postOrder(5); // node with key 5 is the root

console.log('Finished');
// visualize {
