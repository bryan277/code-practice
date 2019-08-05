let lessThanOrEqualToZero = (num) => {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));
console.log(lessThanOrEqualToZero(1));
// false
// true
// true
// false

// lessThanOrEqualToZero(5) ➞ false
//
// lessThanOrEqualToZero(0) ➞ true
//
// lessThanOrEqualToZero(-2) ➞ true
//
// lessThanOrEqualToZero(1) ➞ false
