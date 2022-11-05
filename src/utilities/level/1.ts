import {
  getRandomNumber,
  questionFormat,
  getRandomBoolean,
  imageFormat,
  twoDimentional,
  threeDimentional,
  lengths,
  weights,
  lengthsOfTime,
} from "../helpers";

export const level1 = [
  "Introduction to whole number until 50",
  "Addition and subtraction of whole number until 20",
  "Introduction to 2D and 3D shapes",
  "Comparing length, weight, and time",
];

export function introductionToWholeNumberUntil50(): Result {
  const number = getRandomNumber(5, 50);
  const step = getRandomNumber(1, 4);
  const isAbove = getRandomBoolean();
  const answer = isAbove ? number + step : number - step;
  const question = questionFormat(
    `What's ${step} numbers ${isAbove ? "after" : "before"} ${number}?`
  );
  // What's 3 number above 20?

  return { question, answer };
}

export function additionAndSubtractionOfWholeNumberUntil20(): Result {
  let firstNumber = getRandomNumber(1, 20);
  let secondNumber = getRandomNumber(1, 20);
  const isPlus = getRandomBoolean();
  let isInvalid = isPlus
    ? firstNumber + secondNumber > 20
    : firstNumber - secondNumber < 1;

  while (isInvalid) {
    firstNumber = getRandomNumber(1, 20);
    secondNumber = getRandomNumber(1, 20);
    
    isInvalid = isPlus
      ? firstNumber + secondNumber > 20
      : firstNumber - secondNumber < 1;
  }

  const answer = isPlus
    ? firstNumber + secondNumber
    : firstNumber - secondNumber;

  const question = questionFormat(
    `${firstNumber} ${isPlus ? "+" : "-"} ${secondNumber} = ...?`
  );
  // 14 + 3 = ...?

  return { question, answer };
}

export function introductionTo2D3D(): Result {
  const is2D = getRandomBoolean();
  let arr = is2D ? twoDimentional : threeDimentional;
  const answer = arr[getRandomNumber(0, arr.length - 1)].name.toLowerCase();

  const question = questionFormat(
    `What shape is it? <br />` +
      imageFormat(`/shapes/${answer.replace(" ", "-")}.png" />`)
  );
  // What shape is it?
  // (image of trapezoid)

  return { question, answer };
}

export function comparingLengthWeightAndTime(): Result {
  const choice = getRandomNumber(1, 3);
  const arr = choice === 1 ? lengths : choice === 2 ? weights : lengthsOfTime;

  // To prevent randomness will take edge of array, +1 to min and -1 to max value
  const unit = getRandomNumber(1, arr.length - 2);
  const firstUnit = arr[unit];
  const secondUnit = arr[getRandomBoolean() ? unit + 1 : unit - 1];

  // To make it more challenging
  // If first unit is lower than second, For ex: Centimeter to Decimeter
  // Add more range of randomness at first unit
  // So there's a chance that lower first unit beat second unit. Vice versa
  // For example:
  // - 50 Centimeter > 3 Decimeter
  // - 25 Decimeter > 2 Meter
  let firstNumber = 0;
  let secondNumber = 0;

  if (firstUnit.count < secondUnit.count) {
    firstNumber = getRandomNumber(10, 100);
    secondNumber = getRandomNumber(1, 10);
  } else {
    firstNumber = getRandomNumber(1, 10);
    secondNumber = getRandomNumber(10, 100);
  }

  const answer =
    firstNumber * firstUnit.count > secondNumber * secondUnit.count ? ">" : "<";

  const question = questionFormat(
    `If left side is higher than right side, type "<". Otherwise, type ">" <br /> ${firstNumber} ${firstUnit.name} ... ${secondNumber} ${secondUnit.name}`
  );
  // If left side is higher than right side, type "<". Otherwise, type ">"
  // 12 Meter ... 4 Decimeter

  return { question, answer };
}
