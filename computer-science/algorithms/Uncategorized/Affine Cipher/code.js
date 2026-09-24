const plainText = 'secret';

/*
 code assumes that plainText contains ONLY LOWER CASE ALPHABETS
 */

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

const keys = { a: 5, b: 7 };
const N = 26;

function encrypt(plainText) {
  let cypherText = '';

  function cryptAlpha(alpha) {
    const index = alpha.charCodeAt(0) - 'a'.charCodeAt(0);
    let result = ((keys.a * index) + keys.b).mod(N);

    console.log(`Index of ${alpha} = ${index}`);

    result += 'a'.charCodeAt(0);
    return String.fromCharCode(result);
  }

  console.log('Beginning Affine Encryption');
  console.log('Encryption formula: <b>((keys.a * indexOfAlphabet) + keys.b) % N</b>');
  console.log(`keys.a=${keys.a}, keys.b=${keys.b}, N=${N}`);

  for (const i in plainText) {

    cypherText += cryptAlpha(plainText[i]);

  }

  return cypherText;
}

function decrypt(cypherText) {
  let plainText = '';
  const aInverse = ((() => {
    for (let i = 1; i < N; i++) {
      if (((keys.a * i).mod(N)) === 1) {
        return i;
      }
    }
  })());

  console.log(`a<sup>-1</sup> = ${aInverse}`);

  function decryptAlpha(alpha) {
    const index = alpha.charCodeAt(0) - 'a'.charCodeAt(0);
    let result = (aInverse * (index - keys.b)).mod(N);

    console.log(`Index of ${alpha} = ${index}`);

    result += 'a'.charCodeAt(0);
    return String.fromCharCode(result);
  }

  console.log('Beginning Affine Decryption');
  console.log('Decryption formula: <b>(a<sup>-1</sup> * (index - keys.b)) % N</b>');
  console.log(`keys.b=${keys.b}, N=${N}`);

  for (const i in cypherText) {

    plainText += decryptAlpha(cypherText[i]);

  }

  return plainText;
}

const cipherText = encrypt(plainText);
ctTracer.set(cipherText);
decrypt(cipherText);
