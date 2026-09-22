let sum = D[0] + D[1] + D[2];
let max = sum;

for (let i = 3; i < D.length; i++) {
  sum += D[i] - D[i - 3];
  if (max < sum) max = sum;
  
}
