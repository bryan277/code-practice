const firstArg = (...arr) => {
  let first = arr.shift();
  return first;
}

const lastArg = (...arr) => {
  let last = arr.pop();
  return last;
}

console.log(firstArg(1, 2, 3));
console.log(lastArg(1,2,3));
// firstArg(1, 2, 3) ➞ 1
//
// lastArg(1, 2, 3) ➞ 3
//
// firstArg(8) ➞ 8
//
// lastArg(8) ➞ 8
