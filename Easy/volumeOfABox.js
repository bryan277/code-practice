const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
//10

// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
