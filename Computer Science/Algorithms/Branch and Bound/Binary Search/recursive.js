function BinarySearch(array, element, minIndex, maxIndex) { // array = sorted array, element = element to be found, minIndex = low index, maxIndex = high index
  if (minIndex > maxIndex) {
    
    console.log(`${element} is not found!`);
    
    return -1;
  }

  const middleIndex = Math.floor((minIndex + maxIndex) / 2);
  const testElement = array[middleIndex];

  if (testElement < element) {
    
    console.log('Going right.');
    
    return BinarySearch(array, element, middleIndex + 1, maxIndex);
  }

  if (testElement > element) {
    
    console.log('Going left.');
    
    return BinarySearch(array, element, minIndex, middleIndex - 1);
  }

  if (testElement === element) {
    
    return middleIndex;
  }

  console.log(`${element} is not found!`);
  
  return -1;
}

const element = D[Randomize.Integer({ min: 0, max: D.length - 1 })];

console.log(`Using binary search to find ${element}`);

BinarySearch(D, element, 0, D.length - 1);
