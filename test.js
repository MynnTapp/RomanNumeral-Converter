const conversionObj = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const converter = (num) => {
  let newStr = "";
  if (num < 1 || num > 3999) {
    throw new Error("Input number must be between 1 and 3999");
  }
  for (const key in conversionObj) {
    while (num >= conversionObj[key]) {
      newStr += key;
      num -= conversionObj[key];
    }
  }
  return newStr;
};

console.log(converter(13));
