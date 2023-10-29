const reverseString = function(oldString) {
  let newString = "";
  const strLen = oldString.length;
  if (strLen > 0) {
    for (let i = 1; i <= strLen; i++) {
      newString += oldString[strLen - i];
    }
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
