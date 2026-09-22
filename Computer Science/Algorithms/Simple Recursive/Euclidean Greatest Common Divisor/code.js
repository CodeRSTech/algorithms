const a = [];
a.push(465);
a.push(255);

console.log(`Finding the greatest common divisor of ${a[0]} and ${a[1]}`);

console.log('Checking if first number is at most the second number');

if (a[0] > a[1]) {
  const tmp = a[0];
  a[0] = a[1];
  a[1] = tmp;
  
  console.log('The first number is bigger than the second number. Switching the numbers.');

}

while (a[0] > 0) {
  
  console.log(`${a[1]} % ${a[0]} = ${a[1] % a[0]}`);
  console.log('Switching a[1] with a[1]%a[0]');
  
  a[1] %= a[0];

  console.log('Now switching the two values to keep a[0] < a[1]');
  
  const tmp = a[0];
  a[0] = a[1];
  a[1] = tmp;
  
}

console.log(`The greatest common divisor is ${a[1]}`);
