const getWord = (x, y) => {
  let concat = x.concat(y);
  return concat.charAt(0).toUpperCase() + concat.slice(1);
}

console.log(getWord("seas", "onal"));
// s.charAt(0).toUpperCase()
