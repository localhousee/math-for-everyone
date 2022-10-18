import { getRandomBoolean, getRandomNumber, questionFormat } from "./helpers";

const numbers = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";
  if (type === "whole number") ({ question, answer } = wholeNumber(limit));
  else if (type === "introduction to fractions") ({ question, answer } = fractions(4, "number"));
  else if (type.includes("simple fractions and whole number")) ({ question, answer } = wholeNumberAndFractions(limit, "number"));
  else if (type === "simple fractions with image") ({ question, answer } = fractions(10, "image"));
  return { question, answer };
}
const wholeNumber = (limit: number): Result => {
  let start = 0;
  let step = 0;
  let isMinus = getRandomBoolean();

  // To prevent value goes negative and above limit
  while (start - step <= 0 || start + step > limit) {
    start = getRandomNumber(0, limit);
    step = getRandomNumber(1, 4);
  }

  const question = questionFormat(`What's ${step} number ${isMinus ? "before" : "after"} ${start}?`);
  const answer = (isMinus ? start - step : start + step).toString();

  return { question, answer };
}
const fractions = (limit: number, type: string): Result => {
  let question = "";
  let answer = "";

  if (type === "number") {
    let fractions = getRandomNumber(2, limit);
    let number = getRandomNumber(1, 100);

    // Repeat until number is divisible by fractions
    while (number % fractions !== 0) {
      fractions = getRandomNumber(2, 4);
      number = getRandomNumber(1, 100);
    }

    question = questionFormat(`1/${fractions} of ${number} is ... ?`);
    answer = (number / fractions).toString();

  } else {
    const value = getRandomNumber(2, limit);
    question = questionFormat(`<img src="/fractions/1-${value}.jpg" alt="fractions" class="w-1/4 h-1/4 mx-auto" />`);
    answer = `1/${value}`;
  }

  return { question, answer };
}
const wholeNumberAndFractions = (limit: number, type: string): Result => {
  let question = "";
  let answer = "";
  const isWholeNumber = getRandomBoolean();
  if (isWholeNumber) ({ question, answer } = wholeNumber(limit));
  else ({ question, answer } = fractions(limit, type));
  return { question, answer };
}

export default numbers;