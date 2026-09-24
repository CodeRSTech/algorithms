const D = [-2, -3, 4, -1, -2, 1, 5, -3];

const maxSubarraySum = (function maxSubarray(array) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  console.log('Initializing maxSoFar = 0 & maxEndingHere = 0');

  for (let i = 0; i < array.length; i++) {

    console.log(`${maxEndingHere} + ${array[i]}`);
    
    maxEndingHere += array[i];
    
    console.log(`=> ${maxEndingHere}`);

    if (maxEndingHere < 0) {
      
      console.log('maxEndingHere is negative, set to 0');
      
      maxEndingHere = 0;
    }

    if (maxSoFar < maxEndingHere) {
      
      console.log(`maxSoFar < maxEndingHere, setting maxSoFar to maxEndingHere (${maxEndingHere})`);
      
      maxSoFar = maxEndingHere;
    }

  }

  return maxSoFar;
}(D));

console.log(`Maximum Subarray's Sum is: ${maxSubarraySum}`);
