// Fix this incorrect code!
function checkAllEven(arr) {
  return arr.every(x => x % 2 === 0);
}


console.log(checkAllEven([1, 2, 3, 4]));
// checkAllEven([1, 2, 3, 4]) ➞ false
//
console.log(checkAllEven([2, 4, 6]));
//
// checkAllEven([5, 6, 8, 10]) ➞ false
//
// checkAllEven([-2, 2, -2, 2]) ➞ true
