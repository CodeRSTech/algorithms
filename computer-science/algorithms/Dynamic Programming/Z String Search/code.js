// let pattern = "aab";
// let text = "aabxaabxcaabxaabxay";
const pattern = 'abc';
const text = 'xabcabzabc';

const len = pattern.length + text.length + 1;

const z = new Array(len);
z[0] = 0;

function createZarr(concat) {
  let left;
  let right;
  let N;
  N = concat.length;
  left = 0;
  right = 0;
  for (let i = 1; i < N; i++) {
    
    if (i > right) {
      left = right = i;
      while (right < N && concat[right] === concat[right - left]) {
        
        right++;
      }
      
      z[i] = (right - left);
      
      console.log('--------------------------------');
      console.log(`Value of z[${i}] = the length of the substring starting from ${i} which is also the prefix of the concatinated string(=${right - left})`);
      console.log('--------------------------------');
      
      right--;
    } else if (z[i - left] < (right - i + 1)) {
      
      z[i] = z[i - left];
      
    } else {
      
      console.log(`The substring from index ${i - left} will cross the right end.`);
      
      left = i;
      while (right < N && concat[right] === concat[right - left]) {
        
        right++;
      }
      
      z[i] = (right - left);
      right--;
      
      console.log('--------------------------------');
      console.log(`Value of z[${i}] = the length of the substring starting from ${i} which is also the prefix of the concatinated string(=${right - left})`);
      console.log('--------------------------------');
      
    }
    
  }
}

const concat = `${pattern}$${text}`;

const patLen = pattern.length;
createZarr(concat);

console.log('The Values in Z array equal to the length of the pattern indicates the index at which the pattern is present');
console.log('===================================');
for (let i = 0; i < len; i++) {
  if (z[i] === patLen) {
    const pos = i - (patLen + 1);
    console.log(`Pattern Found at index ${pos}`);
  }
}
console.log('===================================');
