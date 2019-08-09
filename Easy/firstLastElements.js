const firstLast = arr => [arr.shift(), arr.pop()];

console.log(firstLast([5, 10, 15, 20, 25]));
console.log(firstLast(["edabit", 13, null, false, true]));
//
// firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]
//
// firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]
//
// firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]
