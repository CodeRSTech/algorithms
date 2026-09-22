const A = [1, 3, 3, 2, 1, 1, 1];
const N = A.length;

function isMajorityElement(element) {
  let count = 0;
  
  console.log(`Verify majority element ${element}`);
  
  for (let i = N - 1; i >= 0; i--) {
    
    if (A[i] === element) {
      count++;
    } else {
      
    }
  }
  
  console.log(`Count of our assumed majority element ${count}`);
  
  if (count > Math.floor(N / 2)) {
    
    console.log('Our assumption was correct!');
    
    return true;
  }
  
  console.log('Our assumption was incorrect!');
  
  return false;
}

function findProbableElement() {
  let index = 0;
  let count = 1;

  console.log(`Beginning with assumed majority element : ${A[index]} count : ${count}`);
  console.log('--------------------------------------------------------');
  
  for (let i = 1; i < N; i++) {
    
    if (A[index] === A[i]) {
      count++;
      
      console.log(`Same as assumed majority element! Count : ${count}`);
      
    } else {
      count--;
      
      console.log(`Not same as assumed majority element! Count : ${count}`);
      
    }

    if (count === 0) {
      
      console.log('Wrong assumption in majority element');

      index = i;
      count = 1;

      console.log(`New assumed majority element!${A[i]} Count : ${count}`);
      console.log('--------------------------------------------------------');
      
    } else {
      
    }
  }
  
  console.log(`Finally assumed majority element ${A[index]}`);
  console.log('--------------------------------------------------------');
  
  return A[index];
}

function findMajorityElement() {
  const element = findProbableElement();
  
  if (isMajorityElement(element) === true) {
    console.log(`Majority element is ${element}`);
  } else {
    console.log('No majority element');
  }
  
}

findMajorityElement();
