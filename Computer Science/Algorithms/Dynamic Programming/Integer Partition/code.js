function partition(A, n, p) {
    
    if (p == 0) console.log(`[${A.split('').join(', ')}]`);
    
    else {
        if (n > 1) partition(A, n - 1, p);
        if (n <= p) partition(n + A, n, p - n);
    }
}

function integerPartition(n) {

  // cycle through each cell of matrix
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i > j)  {
        
        // set cell to cell above it
        D[i][j] = D[i - 1][j];
        
      }
      else {
        
        // grab above cell and add it to previous cell
        const above = D[i - 1][j];
        const left = D[i][j - i];
        D[i][j] = above + left;
        
      }
    }
  }
  return D[n][n];
}

console.log(`Partitioning: ${integer}`);

partition(A, integer, integer);
const part = integerPartition(integer);

console.log(part);
