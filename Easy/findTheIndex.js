const find_index = (arr, str) => {
  return arr.indexOf(str);
};

console.log(find_index(["hi", "edabit", "fgh", "abc"], "fgh"));

// find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// find_index(["a", "g", "y", "d"], "d") ➞ 3

// find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
