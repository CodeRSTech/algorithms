const N = 15;
const A = new Array(N);
for (let i = N - 1; i >= 0; i--) {
  A[i] = 0;
}
A[0] = 1; // By convention 1 is an ugly number

const M = [2, 3, 5]; // multiples of 2, 3, 5 respectively
const I = [0, 0, 0]; // iterators of 2, 3, 5 respectively

for (let i = 1; i < N; i++) {
  // next is minimum of m2, m3 and m5
  const next = (M[0] <= M[1]) ? (M[0] <= M[2]) ? M[0] : M[2] : (M[1] <= M[2]) ? M[1] : M[2];
  
  console.log(` Minimum of ${M[0]}, ${M[1]}, ${M[2]} : ${next}`);
  
  A[i] = next;

  if (next === M[0]) {
    I[0]++;
    M[0] = A[I[0]] * 2;
    
  }
  if (next === M[1]) {
    I[1]++;
    M[1] = A[I[1]] * 3;
    
  }
  if (next === M[2]) {
    I[2]++;
    M[2] = A[I[2]] * 5;
    
  }
}
