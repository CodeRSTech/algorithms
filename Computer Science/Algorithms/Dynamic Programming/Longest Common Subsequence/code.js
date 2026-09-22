const string1 = 'AGGTAB';
const string2 = 'GXTXAYB';
const m = string1.length;
const n = string2.length;
const A = new Array(m + 1);
for (let i = 0; i < m + 1; i++) {
  A[i] = new Array(n + 1);
}

let i;
let j;

// Build the memo table in bottom up fashion
for (i = 0; i <= m; i++) {
  for (j = 0; j <= n; j++) {
    if (i === 0 || j === 0) {
      A[i][j] = 0;
    } else if (string1[i - 1] === string2[j - 1]) {

      A[i][j] = A[i - 1][j - 1] + 1;

    } else {

      if (A[i - 1][j] > A[i][j - 1]) {
        A[i][j] = A[i - 1][j];
      } else {
        A[i][j] = A[i][j - 1];
      }

    }
    
  }
}

let finalString = '';
i = m;
j = n;
while (i >= 1 && j >= 1) {
  
  if (string1[i - 1] === string2[j - 1]) {

    finalString = string1[i - 1] + finalString;
    i--;
    j--;
  } else if (A[i - 1][j] > A[i][j - 1]) {
    i--;
  } else {
    j--;
  }
}

console.log(`Longest Common Subsequence Length is ${A[m][n]}`);
console.log(`Longest Common Subsequence is ${finalString}`);
