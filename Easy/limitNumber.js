const limitNumber = (num, rangeLow, rangeHigh) => {
  if (num < rangeLow) {
    return rangeLow;
  } else if (num > rangeHigh) {
    return rangeHigh;
  } else {
    return num;
  }
};

console.log(limitNumber(5, 1, 10));
