const T = {};

const elements = [5, 8, 10, 3, 1, 6, 9, 7, 2, 0, 4]; // item to be inserted

function bstInsert(root, element, parent) { // root = current node , parent = previous node
  
  const treeNode = T[root];
  let propName = '';
  if (element < root) {
    propName = 'left';
  } else if (element > root) {
    propName = 'right';
  }
  if (propName !== '') {
    if (!(propName in treeNode)) { // insert as left child of root
      treeNode[propName] = element;
      T[element] = {};
      
    } else {
      bstInsert(treeNode[propName], element, root);
    }
  }
  
}

const Root = elements[0]; // take first element as root
T[Root] = {};

for (let i = 1; i < elements.length; i++) {
  
  bstInsert(Root, elements[i]); // insert ith element
  
}
