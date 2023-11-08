const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  if (num < 2) return 1;
  let fibSequence = [1, 1];
  for (let i = 2; i < num; i++) {
    let fibLen = fibSequence.length;
    let a = fibSequence[fibLen - 2];
    let b = fibSequence[fibLen - 1];
    let c = a + b;
    fibSequence[i] = c;
  }
  return fibSequence[fibSequence.length - 1];
};


// Do not edit below this line
module.exports = fibonacci;
