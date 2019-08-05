const addUp = (num) => {
  let total = 0;
  for(var i = 1; i <= num.length; i++) {
    total += i;
  }
  return total;
}


// addUp(4) ➞ 10
//
// addUp(13) ➞ 91
//
// addUp(600) ➞ 180300
