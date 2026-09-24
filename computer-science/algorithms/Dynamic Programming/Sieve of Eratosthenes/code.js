const N = 30;
const a = [];
const b = [];
for (let i = 1; i <= N; i++) {
  a.push(i);
  b.push(0);
}

for (let i = 2; i <= N; i++) {
  if (b[i] === 0) {
    
    for (let j = i + i; j <= N; j += i) {
      b[j] = 1; // a[j-1] is not prime, mark by blue indicators
      
    }
    
  }
}

console.log(`The unmarked numbers are the prime numbers from 1 to ${N}`);
