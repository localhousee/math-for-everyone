import { getRandomTheory } from "./helpers";
import { wholeNumber } from "./numbers";

export function generateQuestion(level: number) {
  const theory = getRandomTheory(level - 1);
  if (theory.name === 'whole number') {
    let title = theory.description;
    const limit = theory.description.split(" ").pop()!;
    let { question, answer } = wholeNumber(parseInt(limit));
    return { title, question, answer };
  }
  // else if (title.includes("Addition and subtraction of whole number until")) {
  //   const limit = title.split(" ").pop()!;
  //   let result = additionAndSubtraction(parseInt(limit));
  //   description = result[0];
  //   answer = result[1];
  // } else if (title.includes("two-dimentional and three-dimentional")) {
  //   const type = title.split(" ").shift()!;
  //   let result = dimentionalFigure(type)!;
  //   description = result[0];
  //   answer = result[1];
  // } else if (title.includes("length, weight, time")) {
  //   const type = title.split(" ").shift()!;
  //   let result = lengthWeightAndTemperature(type)!;
  //   description = result[0];
  //   answer = result[1];
  // } else if (title.includes("Multiplication and division of whole number until")) {
  //   let result = multiplicationAndDivision(100)!;
  //   description = result[0];
  //   answer = result[1];
  // }
};

// const additionAndSubtraction = (limit: number) => {
//   let answer = 0;
//   let first = 0;
//   let second = 0;
//   let operator = false;
//   while (answer <= 0 || answer > 20) {
//     first = getRandomNumber(1, limit);
//     second = getRandomNumber(1, limit);
//     operator = Math.random() < 0.5;
//     answer = operator ? first - second : first + second;
//   }
//   const questionText = `<p class="text-center">${first} ${operator ? "-" : "+"} ${second} = ?</p>`;
//   const result = [questionText, answer.toString()];
//   return result;
// }

// const dimentionalFigure = (type: string) => {
//   let answer = "";
//   const twoDimentional = ["circle", "kite", "parallelogram", "rectangle", "rhombus", "square", "trapezoid", "triangle"];
//   const threeDimentional = ["cone", "cube", "cylinder", "rectangle prism", "sphere"];
//   const shape = Math.random() < 0.5;
//   if (type === "Introduction") {
//     if (shape) {
//       answer = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
//     } else {
//       answer = threeDimentional[getRandomNumber(0, threeDimentional.length - 1)].replace(" ", "-");
//     }
//     const questionText = `<img src="/dimentional-figure/${answer}.png" alt="image" class="w-1/2 h-1/2 mx-auto" />`;
//     const result: [string, string] = [questionText, answer];
//     return result;
//   }
// }

// const lengthWeightAndTemperature = (type: string) => {
//   type Unit = { name: string; count: number };
//   const lengths: Unit[] = [{ name: "Inch", count: 2.5 }, { name: "Feet", count: 30 }, { name: "Yard", count: 90 }, { name: "Miles", count: 16000 }];
//   const temperatures: Unit[] = [{ name: "Celcius", count: 5 }, { name: "Kelvin", count: 5 }, { name: "Reamur", count: 4 }, { name: "Fahrenheit", count: 9 }];
//   const weights: Unit[] = [{ name: "Tonne", count: 1000000000 }, { name: "Ounce", count: 28349.5 }, { name: "Pound", count: 453592 }, { name: "Kilogram", count: 1000000 }, { name: "Hectogram", count: 100000 }, { name: "Gram", count: 1000 }, { name: "Decigram", count: 100 }, { name: "Centigram", count: 10 }, { name: "Miligram", count: 1 }];
//   const lengthsOfTime: Unit[] = [{ name: "Second", count: 1 }, { name: "Minute", count: 60 }, { name: "Hour", count: 3600 }, { name: "Day", count: 86400 }, { name: "Month", count: 2592000 }, { name: "Year", count: 31104000 }];

//   let firstNumber = 0;
//   let secondNumber = 0;
//   let firstUnit: Unit = { name: "", count: 0 };
//   let secondUnit: Unit = { name: "", count: 0 };
//   let arr: Unit[] = [];
  
//   if (type === "Comparing") {
//     const choice = getRandomNumber(1, 4);
//     if (choice === 1) arr = lengths;
//     else if (choice === 2) arr = weights;
//     else if (choice === 3) arr = lengthsOfTime;
//     else if (choice === 4) arr = temperatures;

//     firstUnit = arr[getRandomNumber(0, arr.length - 1)];
//     secondUnit = arr[getRandomNumber(0, arr.length - 1)];
//     if (firstUnit.count < secondUnit.count) {
//       firstNumber = getRandomNumber(10, 100);
//       secondNumber = getRandomNumber(1, 10);
//     } else {
//       firstNumber = getRandomNumber(1, 10);
//       secondNumber = getRandomNumber(10, 100);
//     }
  
//     if (firstUnit.name === "Fahrenheit") firstNumber += 32;
//     else if (secondUnit.name === "Fahrenheit") secondNumber += 32;
//     else if (firstUnit.name === "Kelvin") firstNumber += 273;
//     else if (secondUnit.name === "Kelvin") secondNumber += 273;

//     const answer = firstNumber * firstUnit.count > secondNumber * secondUnit.count ? ">" : "<";
//     const questionText = `<p class="text-center">Type "<" or ">" <br /> ${firstNumber} ${firstUnit.name} ... ${secondNumber} ${secondUnit.name}</p>`;
//     const result: [string, string] = [questionText, answer];
//     return result;
//   } else if (type === "Determine") {
//     const choice = getRandomNumber(1, 3);
//     if (choice === 1) arr = lengths;
//     else if (choice === 2) arr = weights;
//     else if (choice === 3) arr = lengthsOfTime;

//     firstUnit = arr[getRandomNumber(0, arr.length - 1)];
//     secondUnit = arr[getRandomNumber(0, arr.length - 1)];
//     while (firstUnit.count < secondUnit.count) {
//       firstUnit = arr[getRandomNumber(0, arr.length - 1)];
//       secondUnit = arr[getRandomNumber(0, arr.length - 1)];
//     }

//     firstNumber = getRandomNumber(1, 20);
//     const answer = firstNumber * firstUnit.count / secondUnit.count;
//     const questionText = `<p class="text-center">${firstNumber} ${firstUnit.name} = ... ${secondUnit.name}?</p>`;
//     return [questionText, answer.toString()];
//   }
// }

// const multiplicationAndDivision = (limit: number) => {
//   let firstNumber = getRandomNumber(1, 10);
//   let secondNumber = getRandomNumber(1, 10);
//   const operator = Math.random() < 0.5;
//   let questionText = "";
//   let answer = "";
//   if (operator) {
//     while (firstNumber * secondNumber > limit) {
//       firstNumber = getRandomNumber(1, 10);
//       secondNumber = getRandomNumber(1, 10);
//     };
//     questionText = `<p class="text-center">${firstNumber} x ${secondNumber} = ?</p>`;
//     answer = (firstNumber * secondNumber).toString();
//     return [questionText, answer];
//   }

//   const isDivisible = (first: number, second: number): boolean => first % second === 0;

//   let divide = isDivisible(firstNumber, secondNumber);
//   while (!divide) {
//     firstNumber = getRandomNumber(2, 100);
//     secondNumber = getRandomNumber(2, 10);
//     divide = isDivisible(firstNumber, secondNumber);
//   }

//   questionText = `<p class="text-center">${firstNumber} / ${secondNumber} = ?</p>`;
//   answer = (firstNumber / secondNumber).toString();
//   return [questionText, answer];
// }
