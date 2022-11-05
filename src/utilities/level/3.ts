import {
  getRandomBoolean,
  getRandomNumber,
  questionFormat,
  lengths,
  weights,
  lengthsOfTime,
  twoDimentional,
  angles,
  imageFormat,
} from "../helpers";

export const level3 = [
  "Introduction to simple fractions and whole numbers up to 1000",
  "Relationship between standard units for length, weight, and time",
  "Symmetry on 2D shapes",
  "Introduction to types of angles",
  "Characteristics of various 2D shapes",
];

export function introductionToSimpleFractionAndWholeNumbersUpTo1000(): Result {
  const isFraction = getRandomBoolean();
  if (isFraction) {
    const denominator = getRandomNumber(2, 10);
    let answer = getRandomNumber(10, 1000);
    let number = answer * denominator;
    while (number > 1000) {
      answer = getRandomNumber(10, 1000);
      number = answer * denominator;
    }

    const question = questionFormat(`1/${denominator} of ${number} = ...?`);
    // Output: 1/5 of 200 = ...?

    return { question, answer };
  }

  let answer = getRandomNumber(1, 1000);
  const step = getRandomNumber(1, 4);
  const isPlus = getRandomBoolean();
  let isInvalid = isPlus ? answer + step > 1000 : answer - step < 1;

  while (isInvalid) {
    answer = getRandomNumber(1, 1000);
    isInvalid = isPlus ? answer + step > 1000 : answer - step < 1;
  }

  const number = isPlus ? answer + step : answer - step;

  const question = questionFormat(
    `What's ${step} number ${isPlus ? "after" : "before"} ${number}?`
  );
  // What's 4 number before 463?

  return { question, answer };
}

export function relationshipBetweenStandardUnitsForLengthWeightAndTime(): Result {
  const number = getRandomNumber(1, 100);
  const choice = getRandomNumber(1, 3);
  const arr = choice === 1 ? lengths : choice === 2 ? weights : lengthsOfTime;

  let firstUnit = arr[getRandomNumber(0, arr.length - 1)];
  let secondUnit = arr[getRandomNumber(0, arr.length - 1)];

  let answer = (number * firstUnit.count) / secondUnit.count;

  while (answer <= 1 || answer > 1000) {
    firstUnit = arr[getRandomNumber(0, arr.length - 1)];
    secondUnit = arr[getRandomNumber(0, arr.length - 1)];

    answer = (number * firstUnit.count) / secondUnit.count;
  }

  const question = questionFormat(
    `${number} ${firstUnit.name} = ... ${secondUnit.name}?`
  );
  // Output: 4 Meter = ... Centimeter?

  return { question, answer };
}

export function symmetryOn2D(): Result {
  const shape = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
  const answer = shape.symmetry;
  const question = questionFormat(
    `How much symmetry does ${shape.name.toLowerCase()} have?`
  );
  // How much symmetry does triangle have?

  return { question, answer };
}

export function introductionToTypesOfAngles(): Result {
  const answer = angles[getRandomNumber(0, angles.length - 1)].toLowerCase();
  const question = questionFormat(
    "What's name of this angles? <br />" +
      imageFormat(`/angles/${answer.replace(" ", "-")}.png`)
  );
  // What's name of this angles? 
  // (image of acute angles)
  return { question, answer };
}

export const characteristicsOfVarious2D = (): Result => {
  const shape = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
  const answer = shape.name.toLowerCase();

  const question = questionFormat(
    `${shape.properties.join("<br />")} <br />` +
      "What shape is it based on its characteristics?"
  );
  // (Show characteristic of square) 
  // What shape is it based on its characteristics ?

  return { question, answer };
};
