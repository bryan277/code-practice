const programmers = (one, two, three) => {
  let array = [one, two, three];
  let max = Math.max(...array);
  let min = Math.min(...array);
  return max - min;
}

console.log(programmers(147, 33, 526));
