console.log(`original array = [${D.join(', ')}]`);

const N = D.length;

function flip(start) {
  
  let idx = 0;
  for (let i = start; i < (start + N) / 2; i++) {
    
    const temp = D[i];
    D[i] = D[N - idx - 1];
    D[N - idx - 1] = temp;
    
    idx++;
  }
  
}

for (let i = 0; i < N - 1; i++) {
  
  console.log(`round ${i + 1}`);
  
  const currArr = D.slice(i, N);
  const currMax = currArr.reduce((prev, curr, idx) => ((curr > prev.val) ? { idx, val: curr } : prev), {
    idx: 0,
    val: currArr[0],
  });
  if (currMax.idx !== 0) { // if currMax.idx === 0 that means max element already at the bottom, no flip required
    
    console.log(`flip at ${currMax.idx + i} (step 1)`);
    
    flip(currMax.idx + i, N);
    
    console.log(`flip at ${i} (step 2)`);
    
    flip(i, N);
  }
}

console.log(`sorted array = [${D.join(', ')}]`);
