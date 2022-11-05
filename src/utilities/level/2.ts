import { getRandomBoolean, getRandomNumber, questionFormat } from "../helpers";

export const level2 = [
  "Introduction to whole number until 100",
  "Addition and subtraction of whole number until 100",
  "Multiplication and division of whole number until 100",
  "Introduction to 1/2, 1/3, and 1/4",
];

export function introductionToWholeNumberUntil100(): Result {
  const number = getRandomNumber(5, 100);
  const step = getRandomNumber(1, 4);
  const isAbove = getRandomBoolean() ? "after" : "before";
  const answer = isAbove ? number + step : number - step;
  const question = questionFormat(
    `What's ${step} numbers ${isAbove} ${number}?`
  );
  // What's 2 numbers before 84?

  return { question, answer };
}

export function additionAndSubtractionOfWholeNumberUntil100(): Result {
  let firstNumber = getRandomNumber(1, 100);
  let secondNumber = getRandomNumber(1, 100);
  const isPlus = getRandomBoolean();

  let isInvalid = isPlus
    ? firstNumber + secondNumber > 100
    : firstNumber - secondNumber < 1;

  while (isInvalid) {
    firstNumber = getRandomNumber(1, 100);
    secondNumber = getRandomNumber(1, 100);

    isInvalid = isPlus
      ? firstNumber + secondNumber > 100
      : firstNumber - secondNumber < 1;
  }

  const answer = isPlus
    ? firstNumber + secondNumber
    : firstNumber - secondNumber;

  const question = questionFormat(
    `${firstNumber} ${isPlus ? "+" : "-"} ${secondNumber} = ...?`
  );
  // 23 + 42 = ...?

  return { question, answer };
}

export function multiplicationAndDivisionOfWholeNumberUntil100(): Result {
  let firstNumber = getRandomNumber(1, 100);
  let secondNumber = getRandomNumber(1, 100);
  const isMultiply = getRandomBoolean();
  let isInvalid = isMultiply
    ? firstNumber * secondNumber > 100
    : firstNumber % secondNumber !== 0;

  while (isInvalid) {
    firstNumber = getRandomNumber(1, 100);
    secondNumber = getRandomNumber(1, 100);

    isInvalid = isMultiply
      ? firstNumber * secondNumber > 100
      : firstNumber % secondNumber !== 0;
  }

  const answer = isMultiply
    ? firstNumber * secondNumber
    : firstNumber - secondNumber;
  const question = questionFormat(
    `${firstNumber} ${isMultiply ? "+" : "-"} ${secondNumber} = ...?`
  );
  // X * Y = ...?

  return { question, answer };
}

export function introductionToHalvesThirdsAndFourth(): Result {
  const denominator = getRandomNumber(2, 4);
  let answer = getRandomNumber(1, 100);
  let number = answer * denominator;
  while (number > 100) {
    answer = getRandomNumber(1, 50);
    number = answer * denominator;
  }

  const question = questionFormat(`1/${denominator} of ${number} = ...?`);
  // 1/3 of 33 = ...?

  return { question, answer };
}
