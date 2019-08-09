const operation = (num1, num2) => {
  let total24 = 24;
  if (num1 + num2 === total24) {
    return "added"
  } else if (num1 - num2 === total24) {
    return "subtracted"
  } else if (num1 * num2 === total24) {
    return "multiplied"
  } else if (num1 / num2 === total24) {
    return "divided"
  } else {
    return null
  }
}
console.log(operation(15, 9));
console.log(operation(26, 2));
console.log(operation(11, 11));
// operation(15, 9) ➞ "added"
//
// operation(26, 2) ➞ "subtracted"
//
// operation(11, 11) ➞ null
