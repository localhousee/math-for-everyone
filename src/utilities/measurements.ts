import { getRandomNumber, getRandomBoolean, questionFormat } from "./helpers";

type Unit = { name: string; count: number };
const lengths: Unit[] = [
  { name: "Kilometer", count: 1000000 },
  { name: "Hectometer", count: 100000 },
  { name: "Dekameter", count: 10000 },
  { name: "Meter", count: 1000 },
  { name: "Decimeter", count: 100 },
  { name: "Centimeter", count: 10 },
  { name: "Milimeter", count: 1 },
];
const weights: Unit[] = [
  { name: "Kilogram", count: 1000000 },
  { name: "Hectogram", count: 100000 },
  { name: "Dekagram", count: 10000 },
  { name: "Gram", count: 1000 },
  { name: "Decigram", count: 100 },
  { name: "Centigram", count: 10 },
  { name: "Miligram", count: 1 }
];
const lengthsOfTime: Unit[] = [
  { name: "Year", count: 60 * 60 * 24 * 30 * 12 },
  { name: "Month", count: 60 * 60 * 24 * 30 },
  { name: "Week", count: 60 * 60 * 24 * 7 },
  { name: "Day", count: 60 * 60 * 24 },
  { name: "Hour", count: 60 * 60 },
  { name: "Minute", count: 60 },
  { name: "Second", count: 1 },
];

let firstNumber = 0;
let secondNumber = 0;
let arr: Unit[] = [];

let choice = getRandomNumber(1, 3);
if (choice === 1) arr = lengths;
else if (choice === 2) arr = weights;
else if (choice === 3) arr = lengthsOfTime;

// To prevent randomness is take first or last element, +1 to min and -1 to max value
let unit = getRandomNumber(1, arr.length - 2);
let firstUnit = arr[unit];
let secondUnit = arr[getRandomBoolean() ? unit + 1 : unit - 1];

const measurements = (type: string): Result => {
  let question = "";
  let answer = "";
  if (type.toLowerCase() === "comparing") ({ question, answer } = compare());
  else if (type.toLowerCase() === "determine") ({ question, answer } = determine());
  else if (type.toLowerCase() === "rounding") ({ question, answer } = rounding());
  return { question, answer };
}

const compare = (): Result => {
  /**
   * To make it more challenging
   * If first unit is lower than second, For ex: Centimeter to Decimeter
   * Add more range of randomness at first unit
   * So there's a chance that lower first unit beat second unit. Vice versa
   * For ex: 
   * - 50 Centimeter > 3 Decimeter
   * - 2 Kilometer < 40 Hectometer
   */
  if (firstUnit.count < secondUnit.count) {
    firstNumber = getRandomNumber(10, 100);
    secondNumber = getRandomNumber(1, 10);
  } else {
    firstNumber = getRandomNumber(1, 10);
    secondNumber = getRandomNumber(10, 100);
  }

  const question = questionFormat(`If left side is higher than right side, type "<". Otherwise, type ">"<br/> ${firstNumber} ${firstUnit.name} ... ${secondNumber} ${secondUnit.name}`);

  const answer = firstNumber * firstUnit.count > secondNumber * secondUnit.count ? ">" : "<";

  return { question, answer };
}
const determine = (): Result => {
  firstNumber = getRandomNumber(1, 100);
  firstUnit = arr[getRandomNumber(0, arr.length - 1)];
  firstUnit = arr[getRandomNumber(0, arr.length - 1)];

  const question = questionFormat(`${firstNumber} ${firstUnit.name} = ... ${secondUnit.name}?`);
  const answer = (firstNumber * firstUnit.count / secondUnit.count).toString();

  return { question, answer };
}
const rounding = (): Result => {
  firstNumber = getRandomNumber(10, 100);

  choice = getRandomNumber(1, 2);
  if (choice === 1) arr = lengths;
  else arr = weights;

  const firstUnitIndex = getRandomNumber(0, arr.length - 2);
  firstUnit = arr[firstUnitIndex];
  secondUnit = arr[getRandomNumber(0, firstUnitIndex)];

  let result = 0;

  while (firstUnit.name === secondUnit.name || result === 0 || result > 1000) {
    secondUnit = arr[getRandomNumber(0, arr.length - 1)];
    result = Math.round(firstNumber * firstUnit.count / secondUnit.count);
  }

  const question = questionFormat(`${firstNumber} ${firstUnit.name} = ... ${secondUnit.name}? Round up to nearest number`);
  const answer = (result).toString();
  return { question, answer };
}

export default measurements;