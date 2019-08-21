const unlucky13 = (arr) => {
    return arr.filter(arrs => arrs % 13 !== 0)
  }


console.log(unlucky13([53, 182, 435, 591, 637]));
// unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// // 182 and 637 are divisible by 13.
//
// unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// // No numbers in the array are divisible by 13.
//
// unlucky13([104, 351, 455, 806, 871]) ➞ []
// // All numbers in the array are divisible by 13.
// let not13 = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 13 === 0) {
//       not13.push;
//     }
//   }
//   return not13;
