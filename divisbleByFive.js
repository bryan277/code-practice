let divisibleByFive = (num) => {
  if (num % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisibleByFive(5));
console.log(divisibleByFive(7));
