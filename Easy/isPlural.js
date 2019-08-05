const isPlural = (str) => {
  if(str.slice(-1) == 's') {
    return true;
  } else {
    return false;
  }
}

console.log(isPlural('changes'));
console.log(isPlural('change'));
