const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");
const conversionObj = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

const romanNumeralConverter = () => {
  let number = parseInt(numberInput.value);
  if (number < 1) {
    outputElement.textContent =
      "Please enter a number greater than or equal to 1";
    return;
  } else if (number >= 4000) {
    outputElement.textContent =
      "Please enter a number less than or equal to 3999";
    return;
  } else if (!numberInput.value) {
    outputElement.textContent = "Please enter a valid number";
    return;
  }

  let newStr = "";
  for (const obj of conversionObj) {
    while (number >= obj.value) {
      newStr += obj.numeral;
      number -= obj.value;
    }
  }

  outputElement.textContent = newStr; // Display the result
};

convertBtn.addEventListener("click", romanNumeralConverter);
