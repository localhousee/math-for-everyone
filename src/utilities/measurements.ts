import { getRandomNumber, questionFormat } from "./helpers";

type Unit = { name: string; count: number };
const lengths: Unit[] = [
  { name: "Miles", count: 160934 },
  { name: "Kilometer", count: 100000 },
  { name: "Hectometer", count: 10000 },
  { name: "Dekameter", count: 1000 },
  { name: "Meter", count: 100 },
  { name: "Yard", count: 90 },
  { name: "Feet", count: 30 },
  { name: "Decimeter", count: 10 },
  { name: "Inch", count: 2.5 },
  { name: "Centimeter", count: 1 },
  { name: "Milimeter", count: 0.1 },
];
const weights: Unit[] = [
  { name: "Tonne", count: 1000000000 },
  { name: "Kilogram", count: 1000000 },
  { name: "Hectogram", count: 100000 },
  { name: "Pound", count: 453590 },
  { name: "Ounce", count: 28350 },
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

const measurements = (type: string): Result => {
  let question = "";
  let answer = "";
  if (type.toLowerCase() === "comparing") ({ question, answer } = compare());
  return { question, answer };
}

const compare = (): Result => {
  let firstNumber = 0;
  let secondNumber = 0;
  let unit = 0;
  let firstUnit: Unit = { name: "", count: 0 };
  let secondUnit: Unit = { name: "", count: 0 };
  let arr: Unit[] = [];

  const choice = getRandomNumber(1, 3);
  if (choice === 1) arr = lengths;
  else if (choice === 2) arr = weights;
  else if (choice === 3) arr = lengthsOfTime;

  // To prevent randomness is take first or last element, +1 to min and -1 to max value
  unit = getRandomNumber(1, arr.length - 2);
  
  firstUnit = arr[unit];

  // Choose either left side or right side from first unit
  secondUnit = arr[Math.random() < 0.5 ? unit + 1 : unit - 1];

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

  let answer = firstNumber * firstUnit.count > secondNumber * secondUnit.count ? ">" : "<";

  return { question, answer };
}

export default measurements;