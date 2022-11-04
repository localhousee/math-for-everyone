import {
  getRandomNumber, questionFormat, getRandomBoolean,
  twoDimentional, threeDimentional,
  lengths, weights, lengthsOfTime,
} from "../helpers";

export const level1 = [
  "Introduction to whole number until 50",
  "Addition and subtraction of whole number until 20",
  "Introduction to 2D and 3D shapes",
  "Comparing length, weight, and time",
];

export const introductionToWholeNumberUntil50 = (): Result => {
  const answer = getRandomNumber(5, 50);
  const step = getRandomNumber(1, 4);
  const isAbove = getRandomBoolean();
  const question = questionFormat(`What's ${step} numbers ${isAbove ? 'after' : 'before'} ${isAbove ? answer + step : answer - step}`);
  // Output: What's X numbers before (answer - X)
  // Output: What's X numbers after (answer + X)

  return { question, answer };
}

export const additionAndSubtractionOfWholeNumberUntil20 = (): Result => {
  let firstNumber = getRandomNumber(1, 20);
  let secondNumber = getRandomNumber(1, 20);
  const isPlus = getRandomBoolean();
  // While addition result is above 20 or subtraction is below 1, generate new numbers
  while (
    isPlus && firstNumber + secondNumber > 20
    || !isPlus && firstNumber - secondNumber < 1
  ) {
    firstNumber = getRandomNumber(1, 20);
    secondNumber = getRandomNumber(1, 20);
  }

  const answer = isPlus ? firstNumber + secondNumber : firstNumber - secondNumber;
  const question = questionFormat(`${firstNumber} ${isPlus ? "+" : "-"} ${secondNumber} = ...?`);
  // Output: X + Y = ...?
  // Output: X - Y = ...?

  return { question, answer };
}

export const introductionTo2D3D = () => {
  const is2D = getRandomBoolean();

  let arr: Array<{ name: string; }> = [];

  if (is2D) {
    arr = twoDimentional;
  } else {
    arr = threeDimentional;
  }

  const answer = arr[getRandomNumber(0, arr.length - 1)].name.toLowerCase();
  const question = questionFormat(`What shape is it? <br /> <img src="/shapes/${answer.toLowerCase().replace(" ", "-")}.png" />`);
  // Output: What shape is it?
  //         (Image of random shape)

  return { question, answer };
}

export const comparingLengthWeightAndTime = () => {
  let firstNumber = 0;
  let secondNumber = 0;
  let arr: Array<Unit> = [];

  let choice = getRandomNumber(1, 3);
  if (choice === 1) {
    arr = lengths;
  } else if (choice === 2) {
    arr = weights;
  } else {
    arr = lengthsOfTime;
  }

  // To prevent randomness will take edge of array, +1 to min and -1 to max value
  let unit = getRandomNumber(1, arr.length - 2);
  let firstUnit = arr[unit];
  let secondUnit = arr[getRandomBoolean() ? unit + 1 : unit - 1];

  // To make it more challenging
  // If first unit is lower than second, For ex: Centimeter to Decimeter
  // Add more range of randomness at first unit
  // So there's a chance that lower first unit beat second unit. Vice versa
  // For example: 
  // - 50 Centimeter > 3 Decimeter
  // - 2 Kilometer < 40 Hectometer

  if (firstUnit.count < secondUnit.count) {
    firstNumber = getRandomNumber(10, 100);
    secondNumber = getRandomNumber(1, 10);
  } else {
    firstNumber = getRandomNumber(1, 10);
    secondNumber = getRandomNumber(10, 100);
  }

  const answer = firstNumber * firstUnit.count > secondNumber * secondUnit.count ? ">" : "<";

  const question = questionFormat(`If left side is higher than right side, type "<". Otherwise, type ">" <br /> ${firstNumber} ${firstUnit.name} ... ${secondNumber} ${secondUnit.name}`);
  // Output: If left side is higher than right side, type "<". Otherwise, type ">"
  //          X km ... Y km

  return { question, answer };
}