const string = 'hello! how are you doing?';
const rotation = 5;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// create a map of char -> position to improve run time
// otherwise we would have to search the alphabet each
// time to find the character position
const alphabetMap = alphabet.split('').reduce((map, curr, idx) => {
  map[curr] = idx;
  return map;
}, {});

function getPosUp(pos) {
  return (pos === alphabet.length - 1) ? 0 : pos + 1;
}

function getPosDown(pos) {
  return (pos === 0) ? alphabet.length - 1 : pos - 1;
}

function getNextChar(currChar, direction) {
  const pos = alphabetMap[currChar];
  const nextPos = direction === 'up' ? getPosUp(pos) : getPosDown(pos);
  const nextChar = alphabet.charAt(nextPos);

  console.log(`${currChar} -> ${nextChar}`);
  
  return nextChar;
}

function cipher(str, rotation, direction, cipherTracer) {
  if (!str) return '';

  for (let i = 0; i < str.length; i++) {

    let currChar = str.charAt(i);
    if (typeof alphabetMap[currChar] === 'number') { // don't encrpt/decrypt characters not in  alphabetMap
      let r = rotation;

      console.log(`Rotating ${currChar} ${direction} ${rotation} times`);

      // perform given amount of rotations in the given direction
      while (r-- > 0) {
        currChar = getNextChar(currChar, direction);
        
      }
    } else {
      
      console.log('Ignore this character');
      
    }
    str = str.substring(0, i) + currChar + str.substring(i + 1);
    
    console.log(`Current result: ${str}`);
    
  }

  return str;
}

function encrypt(str, rotation) {
  
  console.log(`Encrypting: ${str}`);
  
  return cipher(str, rotation, 'up', encryptTracer);
}

function decrypt(str, rotation) {
  
  console.log(`Decrypting: ${str}`);
  
  return cipher(str, rotation, 'down', decryptTracer);
}

const encrypted = encrypt(string, rotation);

console.log(`Encrypted result: ${encrypted}`);

decryptTracer.set(encrypted);
const decrypted = decrypt(encrypted, rotation);

console.log(`Decrypted result: ${decrypted}`);
