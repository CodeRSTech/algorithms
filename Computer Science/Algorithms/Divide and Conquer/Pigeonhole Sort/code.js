const A = Randomize.Array1D({ N: 7 });
const N = A.length;

let min = A[0];
let max = A[0];

for (let i = 1; i < N; i++) {
  if (A[i] < min) {
    min = A[i];
  }
  if (A[i] > max) {
    max = A[i];
  }
}
const range = max - min + 1;

const holes = new Array(range);
for (let i = 0; i < range; i++) {
  holes[i] = [];
}

logTracer.println('Filling up holes');

for (let i = 0; i < N; i++) {

  holes[A[i] - min].push(A[i]);

}

logTracer.println('Building sorted array');

let k = 0;
for (let i = 0; i < range; i++) {
  for (let j = 0; j < holes[i].length; j++) {
    
    A[k++] = holes[i][j];
    
  }
}

logTracer.println(`Sorted array is ${A}`);
