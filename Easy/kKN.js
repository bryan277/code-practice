const kTok = (n, k) => {
  if (Math.pow(k, k) === n) {
    return true;
  } else {
    return false;
  }
};

console.log(kTok(4, 2));
console.log(kTok(3124, 5));
console.log(kTok(387420489, 9));
