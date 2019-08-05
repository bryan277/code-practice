let comp = (num, num1) => {
  if (num.length === num1.length) {
    return true;
  } else {
    return false;
  }
}

console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));
// true
// false
// false

// comp("AB", "CD") ➞ true
//
// comp("ABC", "DE") ➞ false
//
// comp("hello", "edabit") ➞ false


// const comp = (str1, str2) => str1.length === str2.length;
