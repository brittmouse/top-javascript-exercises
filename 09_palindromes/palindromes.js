const palindromes = function(str) {
  let newStr = "";
  const letters = 'qwertyiuopasdfghjklzxcvbnm';
  const digits = '1234567890';
  str = str.toLowerCase();
  for (chr in str) {
    if (letters.includes(str[chr]) || digits.includes(str[chr])) newStr += str[chr];
  }
  return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
