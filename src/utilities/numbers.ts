import { getRandomBoolean, getRandomNumber, questionFormat } from "./helpers";

const numbers = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";

  if (type === "whole number") ({ question, answer } = wholeNumber(limit));
  else if (type === "1/2, 1/3, 1/4") ({ question, answer } = halvesThirdsAndFourths());

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
const halvesThirdsAndFourths = (): Result => {
  let fractions = getRandomNumber(2, 4);
  let number = getRandomNumber(1, 100);
  
  while (number % fractions !== 0) {
    fractions = getRandomNumber(2, 4);
    number = getRandomNumber(1, 100);
  }

  const question = questionFormat(`1/${fractions} of ${number} is ... ?`);
  const answer = (number / fractions).toString();

  return { question, answer };
}

export default numbers;