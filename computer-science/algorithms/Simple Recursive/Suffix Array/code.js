let word = 'virgo';
const suffixArray = (function skeleton(word) {
  const arr = [];

  for (let i = 1; i <= word.length + 1; i++) {
    arr.push([i, '-']);
  }

  return arr;
}(word));

word += '$'; // special character

console.log('Appended \'$\' at the end of word as terminating (special) character. Beginning filling of suffixes');

function selectSuffix(word, i) {
  let c = i;

  while (i < word.length - 1) {
    
    i++;
  }

  while (c < word.length - 1) {
    
    c++;
  }
  
}

(function createSA(sa, word) {
  for (let i = 0; i < word.length; i++) {
    sa[i][1] = word.slice(i);

    selectSuffix(word, i);
    
  }
}(suffixArray, word));

console.log('Re-organizing Suffix Array in sorted order of suffixes using efficient sorting algorithm (O(N.log(N)))');

suffixArray.sort((a, b) => {
  
  console.log(`The condition a [1] (${a[1]}) > b [1] (${b[1]}) is ${a[1] > b[1]}`);
  
  return a[1] > b[1];
});
