const getLastItem = (arr) => {
  return arr.slice(-1)[0];
}

console.log(getLastItem([1,2,3]));
//3

// getLastItem([1, 2, 3]) ➞ 3
//
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//
// getLastItem([true, false, true]) ➞ true
