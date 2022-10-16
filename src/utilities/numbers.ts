import { getRandomBoolean, getRandomNumber, questionFormat } from "./helpers";

const numbers = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";

  if(type === "whole number") ({ question, answer } = wholeNumber(limit));

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

export default numbers;