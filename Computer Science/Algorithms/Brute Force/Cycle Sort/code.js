console.log(`original array = [${D.join(', ')}]`);

const N = D.length;
let writes = 0; // number of writing performed
let pos; // the index of item in the sorted array
let item; // an item in the array
let temp; // a temp value used for storing swapped item
for (let cycleStart = 0; cycleStart <= N - 2; cycleStart++) {
  item = D[cycleStart];

  // find where to put the item
  pos = cycleStart;

  for (let i = cycleStart + 1; i <= N - 1; i++) {
    
    if (D[i] < item) {
      pos++;
    }
  }

  // if the item is already there, this is not a circle
  if (pos === cycleStart) {
    
    continue;
  }

  // otherwise put the item there or right after any duplicates
  while (item === D[pos]) {
    pos++;
  }

  // write item to new index and increment writes
  temp = D[pos];
  D[pos] = item;
  item = temp;

  writes++;

  if (pos !== cycleStart) {
    console.log(`Rewrite ${D[pos]} to index ${pos}; the next value to rewrite is ${item}`);
  } else {
    console.log(`Rewrite ${D[pos]} to index ${pos}`);
  }

  // rotate the rest of the cycle
  while (pos !== cycleStart) {
    pos = cycleStart;

    for (let i = cycleStart + 1; i <= N - 1; i++) {
      
      if (D[i] < item) {
        pos++;
      }
    }

    while (item === D[pos]) {
      pos++;
    }

    temp = D[pos];
    D[pos] = item;
    item = temp;

    if (pos !== cycleStart) {
      console.log(`Rewrite ${D[pos]} to index ${pos}; the next value to rewrite is ${item}`);
    } else {
      console.log(`Rewrite ${D[pos]} to index ${pos}`);
    }

    writes++;
  }
}

console.log(`Number of writes performed is ${writes}`);
