const N = 4; // just change the value of N and the visuals will reflect the configuration!
const board = (function createArray(N) {
  const result = [];
  for (let i = 0; i < N; i++) {
    result[i] = Array(...Array(N)).map(Number.prototype.valueOf, 0);
  }
  return result;
}(N));
const queens = (function qSetup(N) {
  const result = [];
  for (let i = 0; i < N; i++) {
    result[i] = [-1, -1];
  }
  return result;
}(N));

function validState(row, col, currentQueen) {
  for (let q = 0; q < currentQueen; q++) {
    const currentQ = queens[q];
    if (row === currentQ[0] || col === currentQ[1] || (Math.abs(currentQ[0] - row) === Math.abs(currentQ[1] - col))) {
      return false;
    }
  }
  return true;
}

function nQ(currentQueen, currentCol) {
  
  console.log(`Starting new iteration of nQueens () with currentQueen = ${currentQueen} & currentCol = ${currentCol}`);
  console.log('------------------------------------------------------------------');
  
  if (currentQueen >= N) {
    
    console.log('The recursion has BOTTOMED OUT. All queens have been placed successfully');
    
    return true;
  }

  let found = false;
  let row = 0;
  while ((row < N) && (!found)) {

    if (validState(row, currentCol, currentQueen)) {
      queens[currentQueen][0] = row;
      queens[currentQueen][1] = currentCol;

      found = nQ(currentQueen + 1, currentCol + 1);
    }

    if (!found) {
      
    }
    row++;
  }

  return found;
}

console.log('Starting execution');

nQ(0, 0);

console.log('DONE');
