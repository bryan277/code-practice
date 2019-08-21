const toInt = (str) => {
  let strInt = parseFloat(str);
  return strInt;
}

const toStr = (str) => {
  return str.toString();
}

console.log(toStr(77));


// toInt("77") ➞ 77
//
// toInt("532") ➞ 532
//
// toStr(77) ➞ "77"
//
// toStr(532) ➞ "532"
