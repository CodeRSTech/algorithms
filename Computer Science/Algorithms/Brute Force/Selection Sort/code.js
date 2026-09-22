console.log(`original array = [${D.join(', ')}]`);

for (let i = 0; i < D.length - 1; i++) {
  let minJ = i;
  
  for (let j = i + 1; j < D.length; j++) {
    
    if (D[j] < D[minJ]) {
      minJ = j;
      
    }
    
  }
  if (minJ !== i) {
    
    console.log(`swap ${D[i]} and ${D[minJ]}`);
    
    const temp = D[i];
    D[i] = D[minJ];
    D[minJ] = temp;
    
  }
  
}

console.log(`sorted array = [${D.join(', ')}]`);
