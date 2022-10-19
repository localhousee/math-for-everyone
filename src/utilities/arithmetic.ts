import { getRandomNumber, getRandomBoolean, questionFormat } from "./helpers";

const arithmetic = (type: string, limit: number): Result => {
  let question = "";
  let answer = "";
  if (type === "addition and subtraction") ({ question, answer } = additionAndSubtraction(limit));
  else if (type === "multiplication and division") ({ question, answer } = multiplicationAndDivision(limit));
  else if (type.includes("factor, gcd, lcm")) ({ question, answer } = factorGcdAndLcm());
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
const factor = (): Result => {
  let number = getRandomNumber(10, 100);
  let result = [];

  while (result.length <= 2) {
    for (let i = 0; i < number; i++) {
      if (number % i === 0) result.push(i);
    }
  }

  const question = questionFormat(`Factors of ${number} are ...?<br/> Separate each number with exactly 1 comma and 1 space<br/> For example: 1, 2, 3, 4, 5`);
  const answer = result.join(", ");

  return { question, answer };
};
const calculateGCD = (first: number, second: number): number => {
  return first ? calculateGCD(second % first, first) : second;
}
const GCD = (): Result => {
  let firstNumber = getRandomNumber(10, 100);
  let secondNumber = getRandomNumber(10, 100);

  while (firstNumber < secondNumber) {
    firstNumber = getRandomNumber(10, 100);
    secondNumber = getRandomNumber(10, 100);
  }

  const question = questionFormat(`Greatest Common Divisor of ${firstNumber} and ${secondNumber} is ...?`);
  const answer = calculateGCD(firstNumber, secondNumber).toString();

  return { question, answer };
};
const LCM = (): Result => {
  let firstNumber = getRandomNumber(10, 50);
  let secondNumber = getRandomNumber(10, 50);

  const question = questionFormat(`Least Common Multiple of ${firstNumber} and ${secondNumber} is ...?`);
  const answer = ((firstNumber * secondNumber) / calculateGCD(firstNumber, secondNumber)).toString();

  return { question, answer };
}
const factorGcdAndLcm = (): Result => {
  let question = "";
  let answer = "";
  const options = ["factor", "gcd", "lcm"];
  const choice = getRandomNumber(0, options.length - 1);
  if (choice === 0) ({ question, answer } = factor());
  if (choice === 1) ({ question, answer } = GCD());
  if (choice === 2) ({ question, answer } = LCM());

  return { question, answer };
}

export default arithmetic;