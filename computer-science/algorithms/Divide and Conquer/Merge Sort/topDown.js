console.log(`original array = [${D.join(', ')}]`);

function mergeSort(start, end) {
  if (Math.abs(end - start) <= 1) return [];
  const middle = Math.ceil((start + end) / 2);

  mergeSort(start, middle);
  mergeSort(middle, end);

  console.log(`divide left[${start}, ${middle - 1}], right[${middle}, ${end - 1}]`);
  
  return mergeSort.merge(start, middle, end);
}

mergeSort.merge = (start, middle, end) => {
  const leftSize = middle - start;
  const rightSize = end - middle;
  const maxSize = Math.max(leftSize, rightSize);
  const size = end - start;
  const left = [];
  const right = [];
  let i;

  for (i = 0; i < maxSize; i++) {
    if (i < leftSize) {
      left.push(D[start + i]);
      
    }
    if (i < rightSize) {
      right.push(D[middle + i]);
      
    }
  }
  
  console.log(`left array = [${left.join(', ')}], ` + `right array = [${right.join(', ')}]`);

  i = 0;
  while (i < size) {
    if (left[0] && right[0]) {
      if (left[0] > right[0]) {
        D[start + i] = right.shift();
        
        console.log(`rewrite from right array[${i}] = ${D[start + i]}`);
        
      } else {
        D[start + i] = left.shift();
        
        console.log(`rewrite from left array[${i}] = ${D[start + i]}`);
        
      }
    } else if (left[0]) {
      D[start + i] = left.shift();
      
      console.log(`rewrite from left array[${i}] = ${D[start + i]}`);
      
    } else {
      D[start + i] = right.shift();
      
      console.log(`rewrite from right array[${i}] = ${D[start + i]}`);
      
    }

    i++;
  }

  const tempArray = [];
  for (i = start; i < end; i++) tempArray.push(D[i]);
  
  console.log(`merged array = [${tempArray.join(', ')}]`);
  
};

mergeSort(0, D.length);

console.log(`sorted array = [${D.join(', ')}]`);
