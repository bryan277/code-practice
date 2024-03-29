const equalSlices = (total, people, each) => {
  let totalSlices = people * each;
  if (totalSlices <= total) {
    return true;
  } else {
    return false;
  }
}
console.log(equalSlices(11,5,2));
console.log(equalSlices(11,5,3));
// true
// false


// equalSlices(11, 5, 2) ➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices
//
// equalSlices(11, 5, 3) ➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices
//
// equalSlices(8, 3, 2) ➞ true
//
// equalSlices(8, 3, 3) ➞ false
//
// equalSlices(24, 12, 2) ➞ true
