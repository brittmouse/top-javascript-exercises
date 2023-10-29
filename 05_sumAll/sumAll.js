const sumAll = function(a, b) {
  if (
    (a < 0 || b < 0) ||
    (typeof (a) !== 'number' || typeof (b) !== 'number')
  ) return "ERROR";

  const max = Math.max(a, b);
  let min = Math.min(a, b);
  let sum = 0;

  do {
    sum += min;
    min++;
  } while (min <= max);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
