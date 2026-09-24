console.log(`original array = [${D[0].join(', ')}]`);

function pow(base, expo) {
  let ans = 1;
  for (let i = 0; i < expo; i++) {
    ans *= base;
  }
  return ans;
}

function digit(i, exp) {
  return parseInt(D[0][i] / pow(10, exp) % 10);
}

for (let exp = 0; exp < 3; exp++) {
  
  console.log(`Digit: ${exp}`);
  
  let i;
  for (i = 0; i < D[0].length; i++) {
    const d = digit(i, exp);
    
    D[2][d] += 1;
    
  }
  for (i = 1; i < 10; i++) {
    
    D[2][i] += D[2][i - 1];
    
  }
  for (i = D[0].length - 1; i >= 0; i--) {
    const d = digit(i, exp);
    
    D[2][d] -= 1;
    
    D[1][D[2][d]] = D[0][i];
    
  }
  for (i = 0; i < D[0].length; i++) {
    
    D[0][i] = D[1][i];
    
  }
  for (i = 0; i < 10; i++) {
    D[2][i] = 0;
    
  }
}

console.log(`sorted array = [${D[0].join(', ')}]`);
