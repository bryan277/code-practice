function isBetween(first, last, word) {
	const sorted = [first, last, word].sort();
	return word === sorted[1];
}

console.log(isBetween("apple", "banana", "azure"));
console.log(isBetween("monk", "monument", "monkey"));
console.log(isBetween("ostracize", "ostrich", "open"));

//
// isBetween("apple", "banana", "azure") ➞ true
//
// isBetween("monk", "monument", "monkey") ➞ true
//
// isBetween("bookend", "boolean", "boost") ➞ false
