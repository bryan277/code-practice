const isTruthy = input => input ? 1 : 0;


console.log(isTruthy("false"));
// isTruthy(0) ➞ 0
//
// isTruthy(false) ➞ 0
//
// isTruthy("") ➞ 0
//
// isTruthy("false") ➞ 1
