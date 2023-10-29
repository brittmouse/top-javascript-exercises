const removeFromArray = function(oldArray, ...args) {
  const newArray = [];
  oldArray.forEach(element => {
    if (!args.includes(element)) newArray.push(element);
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
