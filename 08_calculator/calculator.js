const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }
  return sum;
};

const multiply = function(numList) {
  let product = 1;
  for (let i = 0; i < numList.length; i++) {
    product *= numList[i];
  }
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let answer = 1;
  if (a >= 2) {
    let factor = 2;
    while (factor <= a) {
      answer *= factor;
      factor++;
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
