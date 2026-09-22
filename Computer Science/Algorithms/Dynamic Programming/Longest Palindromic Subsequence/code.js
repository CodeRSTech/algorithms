const seq = 'BBABCBCAB';
let N;
N = seq.length;

const L = new Array(N);

let i;
let j;
for (i = 0; i < N; i++) {
  L[i] = new Array(N);
}
for (i = 0; i < N; i++) {
  L[i][i] = 1;
}

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log('LPS for any string with length = 1 is 1');

for (i = 2; i <= N; i++) {
  
  console.log('--------------------------------------------------');
  console.log(`Considering a sub-string of length ${i}`);
  console.log('--------------------------------------------------');
  
  for (j = 0; j < N - i + 1; j++) {
    const k = j + i - 1;

    console.log(`Comparing ${seq[j]} and ${seq[k]}`);

    if (seq[j] === seq[k] && i === 2) {
      
      console.log(`They are equal and size of the string in the interval${j} to ${k} is 2, so the Longest Palindromic Subsequence in the Given range is 2`);

      L[j][k] = 2;
      
    } else if (seq[j] === seq[k]) {
      
      console.log(`They are equal, so the Longest Palindromic Subsequence in the Given range is 2 + the Longest Increasing Subsequence between the indices ${j + 1} to ${k - 1}`);

      L[j][k] = L[j + 1][k - 1] + 2;
      
    } else {
      
      console.log(`They are NOT equal, so the Longest Palindromic Subsequence in the Given range is the maximum Longest Increasing Subsequence between the indices ${j + 1} to ${k} and ${j} to ${k - 1}`);

      L[j][k] = max(L[j + 1][k], L[j][k - 1]);
      
    }
    
    console.log('--------------------------------------------------');

  }
}

console.log(`Longest Increasing Subsequence of the given string = L[0][${N - 1}]=${L[0][N - 1]}`);
