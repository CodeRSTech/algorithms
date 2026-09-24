console.log(`original array = [${D.join(', ')}]`);

const N = D.length;
let swapped;
let gap = N; // initialize gap size
const shrink = 1.3; // set the gap shrink factor

do {
  // update the gap value for the next comb.
  gap = Math.floor(gap / shrink);
  if (gap < 1) {
    // minimum gap is 1
    gap = 1;
  }

  swapped = false; // initialize swapped
  // a single comb over the input list
  for (let i = 0; i + gap < N; i++) {

    if (D[i] > D[i + gap]) {
      
      console.log(`swap ${D[i]} and ${D[i + gap]}`); // log swap event

      const temp = D[i];
      D[i] = D[i + gap];
      D[i + gap] = temp;

      swapped = true; // Flag swapped has happened and list is not guaranteed sorted
    }
    
  } // End of combing
} while (gap !== 1 || swapped);
