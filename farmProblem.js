const animals = (chickens, cows, pigs) => {
  let chickensLegs = 2;
  let cowsLegs = 4;
  let pigsLegs = 4;
  return (chickens * chickensLegs) + (cows * cowsLegs) + (pigs * pigsLegs);
}

console.log(animals(2,3,5));
console.log(animals(1,2,3));
console.log(animals(5,2,8));
// 36
// 22
// 50

// animals(2, 3, 5) ➞ 36
//
// animals(1, 2, 3) ➞ 22
//
// animals(5, 2, 8) ➞ 50
