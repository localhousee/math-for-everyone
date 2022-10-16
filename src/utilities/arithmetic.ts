import { getRandomNumber, getRandomBoolean, questionFormat } from "./helpers";

const arithmetic = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";
  if (type === "addition and subtraction") ({ question, answer } = additionAndSubtraction(limit));
  else if (type === "multiplication and division") ({ question, answer } = multiplicationAndDivision(limit));

  return { question, answer };
}
const additionAndSubtraction = (limit: number): Result => {
  let first = getRandomNumber(1, limit);
  let second = getRandomNumber(1, limit);

  // 50% chance to get true or false
  let isPlus = getRandomBoolean();

  /**
   * If question is asking for addition and result is overflow the limit
   * or question is asking or subtraction and result is below or same to zero
   * then randomize again both number and change operator
   */
  while ((isPlus && first + second > limit) || (!isPlus && first - second <= 0)) {
    first = getRandomNumber(1, limit);
    second = getRandomNumber(1, limit);
    isPlus = getRandomBoolean();
  }

  const question = questionFormat(`${first} ${isPlus ? "+" : "-"} ${second} = ... ?`);
  const answer = (isPlus ? first + second : first - second).toString();
  return { question, answer };
}
const multiplicationAndDivision = (limit: number): Result => {
  let firstNumber = 0;
  let secondNumber = 0;
  let isMultiply = getRandomBoolean();

  /**
   * If question is asking for multiplication and result is overflow the limit
   * or question is asking or division and first number is not divisible by second number
   * then randomize again both number and change operator
   */
  while (isMultiply && (firstNumber * secondNumber > limit) || !isMultiply && (firstNumber % secondNumber !== 0)) {
    firstNumber = getRandomNumber(1, limit);
    secondNumber = getRandomNumber(1, limit);
    isMultiply = getRandomBoolean();
  }

  const question = questionFormat(`${firstNumber} ${isMultiply ? "x" : "/"} ${secondNumber} = ... ?`);
  const answer = (isMultiply ? firstNumber * secondNumber : firstNumber / secondNumber).toString();
  return { question, answer }
}

export default arithmetic;