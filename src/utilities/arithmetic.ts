import { getRandomNumber, questionFormat } from "./helpers";

const arithmetic = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";
  if (type === "addition and subtraction") ({ question, answer } = additionAndSubtraction(limit));

  return { question, answer };
}
export const additionAndSubtraction = (limit: number): Result => {
  let first = getRandomNumber(1, limit);
  let second = getRandomNumber(1, limit);

  // 50% chance to get true or false
  let isPlus = Math.random() < 0.5;

  /**
   * If question is asking for addition and result is overflow the limit
   * or question is asking or subtraction and result is below or same to zero
   * then randomize again both number and change operator
   */
  while ((isPlus && first + second > limit) || (!isPlus && first - second <= 0)) {
    first = getRandomNumber(1, limit);
    second = getRandomNumber(1, limit);
    isPlus = Math.random() < 0.5;
  }

  const question = questionFormat(`${first} ${isPlus ? "+" : "-"} ${second} = ... ?`);
  const answer = (isPlus ? first + second : first - second).toString();
  return { question, answer };
}

export default arithmetic;