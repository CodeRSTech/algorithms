console.log(`original array = [${D.join(', ')}]`);

for (let i = 1; i < D.length; i++) {
  const key = D[i];
  
  let j;
  for (j = i - 1; (j >= 0) && (D[j] > key); j--) {
    D[j + 1] = D[j];
    
  }
  D[j + 1] = key;
  
}

console.log(`sorted array = [${D.join(', ')}]`);
