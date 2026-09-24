const val = [1, 4, 5, 7]; // The value of all available items
const wt = [1, 3, 4, 5]; // The weights of available items
const W = 7; // The maximum weight we can carry in our collection
const N = val.length;
const DP = new Array(N + 1);

for (let i = 0; i < N + 1; i++) {
  DP[i] = new Array(W + 1);
  for (let j = 0; j < W + 1; j++) {
    DP[i][j] = 0;
  }
}

for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= W; j++) {
    if (i === 0 || j === 0) {
      /*
      If we have no items or maximum weight we can take in collection is 0
      then the total weight in our collection is 0
      */
      DP[i][0] = 0;
      
    } else if (wt[i - 1] <= j) { // take the current item in our collection
      
      const A = val[i - 1] + DP[i - 1][j - wt[i - 1]];
      const B = DP[i - 1][j];
      /*
      find the maximum of these two values
      and take which gives us a greater weight
       */
      if (A > B) {
        DP[i][j] = A;
        
      } else {
        DP[i][j] = B;
        
      }
      
    } else { // leave the current item from our collection
      DP[i][j] = DP[i - 1][j];
      
    }
  }
}

console.log(` Best value we can achieve is ${DP[N][W]}`);
