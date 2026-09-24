// Initialize LIS values for all indexes
for (let i = 0; i < A.length; i++) {
  LIS[i] = 1;
}

console.log('Calculating Longest Increasing Subsequence values in bottom up manner ');

// Compute optimized LIS values in bottom up manner
for (let i = 1; i < A.length; i++) {
  
  for (let j = 0; j < i; j++) {
    
    if (A[i] > A[j] && LIS[i] < LIS[j] + 1) {
      LIS[i] = LIS[j] + 1;
      
      console.log(` LIS[${i}] = ${LIS[i]}`);
      
    }
  }
  
}

// Pick maximum of all LIS values

console.log('Now calculate maximum of all LIS values ');

let max = LIS[0];
for (let i = 1; i < A.length; i++) {
  if (max < LIS[i]) {
    max = LIS[i];
  }
}

console.log(`Longest Increasing Subsequence = max of all LIS = ${max}`);
