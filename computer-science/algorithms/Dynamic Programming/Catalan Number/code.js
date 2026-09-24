const N = 10;
const A = new Array(N + 1);
for (let i = N; i >= 0; i--) {
  A[i] = 0;
}

A[0] = 1;

A[1] = 1;

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < i; j++) {
    A[i] += A[j] * A[i - j - 1];
    
  }
}
