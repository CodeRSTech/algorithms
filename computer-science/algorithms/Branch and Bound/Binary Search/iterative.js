function BinarySearch(array, element) { // array = sorted array, element = element to be found
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let testElement;

  while (minIndex <= maxIndex) {
    const middleIndex = Math.floor((minIndex + maxIndex) / 2);
    testElement = array[middleIndex];

    if (testElement < element) {
      
      console.log('Going right.');
      
      minIndex = middleIndex + 1;
    } else if (testElement > element) {
      
      console.log('Going left.');
      
      maxIndex = middleIndex - 1;
    } else {

      return middleIndex;
    }
  }

  console.log(`${element} is not found!`);
  
  return -1;
}

const element = D[Randomize.Integer({ min: 0, max: D.length - 1 })];

console.log(`Using iterative binary search to find ${element}`);

BinarySearch(D, element);
