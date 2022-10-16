import { getRandomNumber, questionFormat } from "./helpers";

const numbers = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";

  if(type === "whole number") ({ question, answer } = wholeNumber(limit));

  return { question, answer };
}
const wholeNumber = (limit: number): Result => {
  let answer = 0;
  let start = 0;
  let step = 0;
  let isMinus = false;

  // To prevent value goes negative and above limit
  while (answer <= 0 || start + step > limit) {
    start = getRandomNumber(0, limit);
    step = getRandomNumber(1, 4);

    // 50% chance to get plus or minus
    isMinus = Math.random() < 0.5;

    answer = isMinus ? start - step : start + step;
  }

  const question = questionFormat(`What's ${step} number ${isMinus ? "before" : "after"} ${start}?`);

  return {
    question: question,
    answer: answer.toString()
  };
}

export default numbers;