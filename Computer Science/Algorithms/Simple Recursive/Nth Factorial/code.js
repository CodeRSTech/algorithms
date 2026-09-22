function fact(num) {
  if (num < 0) {
    return;
  }

  if (num === 0) {
    return 1;
  }

  var res = num * fact(num - 1);

  D[num - 1] = res;

  return res;
}
fact(index);
