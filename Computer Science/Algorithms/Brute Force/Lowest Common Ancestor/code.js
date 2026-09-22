const G = [ // G[i][j] indicates whether the path from the i-th node to the j-th node exists or not
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

const T = [ // mapping to G as a binary tree , [i][0] indicates left child, [i][1] indicates right child
  [-1, -1],
  [-1, 7],
  [-1, -1],
  [6, 1],
  [-1, -1],
  [3, 8],
  [0, 2],
  [-1, -1],
  [10, 4],
  [-1, -1],
  [9, -1],
];

function lcaBT(parent, root, a, b) {
  
  console.log(`Beginning new Iteration of lcaBT () with parent: ${parent}, current root: ${root}`);
  
  if (root === -1) {
    
    console.log('Reached end of path & target node(s) not found');
    
    return null;
  }

  }

  return (left !== null ? left : right);
}

const a = 7;
const b = 2;

console.log(`Lowest common ancestor of ${a} & ${b} is: ${lcaBT(null, 5, a, b)}`);
