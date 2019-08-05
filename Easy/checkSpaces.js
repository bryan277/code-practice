const hasSpaces = str => {
  if (str.indexOf(" ") >= 0) {
    return true;
  } else {
    return false;
  }
};

console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
// false
// true
