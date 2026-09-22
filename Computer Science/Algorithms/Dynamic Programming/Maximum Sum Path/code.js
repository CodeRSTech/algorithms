const N = DP.length;
const M = DP[0].length;

function update(i, j, value) {
  DP[i][j] = value;
  
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i === 0 && j === 0) {
      update(i, j, D[i][j]);
    } else if (i === 0) {
      
      update(i, j, DP[i][j - 1] + D[i][j]);
      
    } else if (j === 0) {
      
      update(i, j, DP[i - 1][j] + D[i][j]);
      
    } else {
      
      update(i, j, Math.max(DP[i][j - 1], DP[i - 1][j]) + D[i][j]);
      
    }
  }
}

console.log(`max = ${DP[N - 1][M - 1]}`);
