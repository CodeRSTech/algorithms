console.log(`original array = [${D[0].join(', ')}]`);

function mergeSort(start, end) {
  if (Math.abs(end - start) <= 1) return;

  let mergeFrom = 0;
  let mergeTo = 1;
  let width;
  let i;
  for (width = 1; width < end; width *= 2) {
    
    for (i = 0; i < end; i += 2 * width) {
      merge(mergeFrom, i, Math.min(i + width, end), Math.min(i + 2 * width, end), mergeTo);
    }
    // this could be copy(mergeTo, mergeFrom, start, end);
    // but it is more effecient to swap the input arrays
    // if you did copy here, you wouldn't need the copy at the end
    mergeFrom = (mergeFrom === 0 ? 1 : 0);
    mergeTo = 1 - mergeFrom;
  }
  if (mergeFrom !== 0) {
    
    copy(mergeFrom, mergeTo, start, end);
  }
}

function merge(mergeFrom, start, middle, end, mergeTo) {
  let i = start;
  let j = middle;
  let k;
  // in an actual merge implementation, mergeFrom and mergeTo would be arrays
  // here for the ability to trace what is going on better, the arrays are D[mergeFrom] and D[mergeTo]

  for (k = start; k < end; k++) {

    if (i < middle && (j >= end || D[mergeFrom][i] <= D[mergeFrom][j])) {

      D[mergeTo][k] = D[mergeFrom][i];
      i += 1;
    } else {

      D[mergeTo][k] = D[mergeFrom][j];
      j += 1;
    }
  }
}

function copy(mergeFrom, mergeTo, start, end) {
  let i;
  for (i = start; i < end; i++) {

    D[mergeTo][i] = D[mergeFrom][i];

  }
}

mergeSort(0, D[0].length);

console.log(`sorted array = [${D[0].join(', ')}]`);
