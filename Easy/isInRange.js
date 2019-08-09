const isInRange = (num, range) => num >= range.min && num <= range.max;

console.log(isInRange(4, { min: 0, max: 5 }));
console.log(isInRange(4, { min: 4, max: 5 }));
console.log(isInRange(4, { min: 6, max: 10 }));
// isInRange(4, { min: 0, max: 5 }) ➞ true

// isInRange(4, { min: 4, max: 5 }) ➞ true

// isInRange(4, { min: 6, max: 10 }) ➞ false

// isInRange(5, { min: 5, max: 5 }) ➞ true
