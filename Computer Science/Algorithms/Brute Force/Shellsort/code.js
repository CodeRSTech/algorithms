console.log(`Original array = [${D.join(', ')}]`);

const N = D.length;

for (let gap = N; gap = parseInt(gap / 2);) {
  
  console.log('');
  console.log(`Gap of ${gap}`);
  
  for (let i = gap; i < N; i++) {
    
    const k = D[i];
    
    console.log(`Holding: ${k}`);
    
    let j;
    for (j = i; j >= gap && k < D[j - gap]; j -= gap) {
      
      console.log(`${k} < ${D[j - gap]}`);
      
      D[j] = D[j - gap];
      
    }
    const old = D[j];
    D[j] = k;
    
  }
}

console.log('');
console.log(`Sorted array = [${D.join(', ')}]`);
