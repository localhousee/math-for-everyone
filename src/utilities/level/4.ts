import {
  getRandomBoolean,
  getRandomNumber,
  imageFormat,
  questionFormat,
  lengths,
  weights,
} from "../helpers";

export const level4 = [
  "Introduction of equivalent fractions with pictures",
  "Determine factor, Greatest Common Divisor (GCD), and Least Common Multiple (LCM)",
  "Rounding up the results of length and weight measurements",
  "Perimeter and area of squares, rectangles and triangles",
  "Squared numbers and square root numbers",
];

export function introductionOfEquivalentFractionsWithPictures(): Result {
  const denominator = getRandomNumber(2, 10);
  const answer = `1/${denominator}`;
  const question = questionFormat(
    "What's this fraction based on this picture? <br />" +
      imageFormat(`/fractions/1-${denominator}.jpg`)
  );
  // What's this fraction based on this picture?
  // (picture of 1 / 4)

  return { question, answer };
}

export function factor(): Result {
  let number = getRandomNumber(10, 100);
  let result = [...Array(number + 1).keys()].filter((i) => number % i === 0);

  while (result.length <= 2) {
    number = getRandomNumber(10, 100);
    result = [...Array(number + 1).keys()].filter((i) => number % i === 0);
  }

  const question = questionFormat(
    `Factors of ${number} are ...? <br /> Separate each number with exactly 1 comma and 1 space<br/> For example: 1, 2, 3`
  );
  // Factors of 12 are ...?
  // Separate each number with exactly 1 comma and 1 space
  // For example: 1, 2, 3

  const answer = result.join(", ");

  return { question, answer };
}

function calculateGCD(first: number, second: number): number {
  return first ? calculateGCD(second % first, first) : second;
}

export function GCD(): Result {
  let firstNumber = getRandomNumber(10, 100);
  let secondNumber = getRandomNumber(10, 100);
  let answer = calculateGCD(firstNumber, secondNumber);

  while (firstNumber <= secondNumber || answer === 1) {
    firstNumber = getRandomNumber(10, 100);
    secondNumber = getRandomNumber(10, 100);
    answer = calculateGCD(firstNumber, secondNumber);
  }

  const question = questionFormat(
    `Greatest Common Divisor of ${firstNumber} and ${secondNumber} is ...?`
  );
  // Greatest Common Divisor of 24 and 6 is ...?

  return { question, answer };
}

export function LCM(): Result {
  let firstNumber = getRandomNumber(10, 50);
  let secondNumber = getRandomNumber(10, 50);

  const answer =
    (firstNumber * secondNumber) / calculateGCD(firstNumber, secondNumber);

  const question = questionFormat(
    `Least Common Multiple of ${firstNumber} and ${secondNumber} is ...?`
  );
  // Least Common Multiple of 3 and 17 is ...?

  return { question, answer };
}

export function determineFactorGCDLCM(): Result {
  const choice = getRandomNumber(1, 3);
  const { question, answer } =
    choice === 1 ? factor() : choice === 2 ? GCD() : LCM();

  return { question, answer };
}

export function roundingUpTheResultsOfLengthAndWeightMeasurements(): Result {
  const number = getRandomNumber(10, 100);

  const choice = getRandomNumber(1, 2);
  const arr = choice === 1 ? lengths : weights;

  const firstUnitIndex = getRandomNumber(0, arr.length - 2);
  const firstUnit = arr[firstUnitIndex];
  let secondUnit = arr[getRandomNumber(0, firstUnitIndex)];

  let answer = 0;

  while (firstUnit.name === secondUnit.name || answer === 0 || answer > 1000) {
    secondUnit = arr[getRandomNumber(0, arr.length - 1)];
    answer = Math.round((number * firstUnit.count) / secondUnit.count);
  }

  const question = questionFormat(
    `${number} ${firstUnit.name} = ... ${secondUnit.name}? <br />Round up to nearest number`
  );
  // 12 Centimeter = ... Decimeter?
  // Round up to nearest number

  return { question, answer };
}

export function perimeterAndAreaOfSquaresRectanglesAndTriangles(): Result {
  const shape = getRandomNumber(1, 3);
  const isArea = getRandomBoolean();
  // 1 = square
  // 2 = rectangle
  // rest = triangle
  if (shape === 1) {
    const side = getRandomNumber(2, 10);
    const answer = isArea ? Math.pow(side, 2) : side * 4;
    const question = questionFormat(
      `Square: Side = ${side} cm <br />` +
        `${isArea ? "Area" : "Perimeter"} = ... cm?`
    );
    // Square: Side = 4 cm
    // Area = ...cm?

    return { question, answer };
  } else if (shape === 2) {
    const firstNumber = getRandomNumber(2, 20);
    let secondNumber = getRandomNumber(2, 10);

    // Regenerate number if both number is same or Length is smaller than Width
    while (firstNumber === secondNumber || firstNumber < secondNumber) {
      secondNumber = getRandomNumber(2, 10);
    }

    const answer = isArea
      ? firstNumber * secondNumber
      : 2 * (firstNumber + secondNumber);

    const question = questionFormat(
      `Rectangle: Length = ${firstNumber} cm, Width = ${secondNumber} cm <br />` +
        `${isArea ? "Area" : "Perimeter"} = ... cm?`
    );
    // Rectangle: Length = 12 cm, Width = 4 cm
    // Area = ... cm?

    return { question, answer };
  }

  if (isArea) {
    let firstNumber = getRandomNumber(2, 10);
    let secondNumber = getRandomNumber(2, 10);
    let isInvalid = (firstNumber * secondNumber) % 2 !== 0;
    while (isInvalid) {
      firstNumber = getRandomNumber(2, 10);
      secondNumber = getRandomNumber(2, 10);
      isInvalid = (firstNumber * secondNumber) % 2 !== 0;
    }

    const answer = (firstNumber * secondNumber) / 2;
    const question = questionFormat(
      `Triangle: Base = ${firstNumber} cm, Height = ${secondNumber} cm <br />Area = ...cm?`
    );
    // Triangle: Base = 12 cm, Height = 8 cm
    // Area = ...cm?

    return { question, answer };
  }

  const number = getRandomNumber(2, 10);
  const answer = 3 * number;
  const question = questionFormat(
    `Triangle: Side = ${number} cm <br />Perimeter = ...cm?`
  );
  // Triangle: Side = 5 cm
  // Perimeter = ...cm?

  return { question, answer };
}
