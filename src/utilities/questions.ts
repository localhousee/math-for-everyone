import { getRandomTheory } from "./helpers";
import numbers from "./numbers";
import arithmetic from "./arithmetic";
import shapes from "./shapes";
import measurements from "./measurements";

export function generateQuestion(level: number) {
  const theory = getRandomTheory(level - 1);
  const title = theory.description;
  let question = "";
  let answer = "";
  let type = "";
  let limit = 0;

  switch (theory.type) {
    case "numbers":
      limit = parseInt(theory.description.split(" ").pop()!);
      ({ question, answer } = numbers(theory.name, limit));
      break;
    case "arithmetic":
      limit = parseInt(theory.description.split(" ").pop()!);
      ({ question, answer } = arithmetic(theory.name, limit));
      break;
    case "shapes":
      ({ question, answer } = shapes(theory.name));
      break;
    case "measurements":
      type = theory.description.split(" ").shift()!.toLowerCase();
      ({ question, answer } = measurements(type));
      break;
  }
  return { title, question, answer };
};

//   } else if (type === "Determine") {
//     const choice = getRandomNumber(1, 3);
//     if (choice === 1) arr = lengths;
//     else if (choice === 2) arr = weights;
//     else if (choice === 3) arr = lengthsOfTime;

//     firstUnit = arr[getRandomNumber(0, arr.length - 1)];
//     secondUnit = arr[getRandomNumber(0, arr.length - 1)];
//     while (firstUnit.count < secondUnit.count) {
//       firstUnit = arr[getRandomNumber(0, arr.length - 1)];
//       secondUnit = arr[getRandomNumber(0, arr.length - 1)];
//     }

//     firstNumber = getRandomNumber(1, 20);
//     const answer = firstNumber * firstUnit.count / secondUnit.count;
//     const questionText = `<p class="text-center">${firstNumber} ${firstUnit.name} = ... ${secondUnit.name}?</p>`;
//     return [questionText, answer.toString()];
//   }
// }

// const multiplicationAndDivision = (limit: number) => {
//   let firstNumber = getRandomNumber(1, 10);
//   let secondNumber = getRandomNumber(1, 10);
//   const operator = Math.random() < 0.5;
//   let questionText = "";
//   let answer = "";
//   if (operator) {
//     while (firstNumber * secondNumber > limit) {
//       firstNumber = getRandomNumber(1, 10);
//       secondNumber = getRandomNumber(1, 10);
//     };
//     questionText = `<p class="text-center">${firstNumber} x ${secondNumber} = ?</p>`;
//     answer = (firstNumber * secondNumber).toString();
//     return [questionText, answer];
//   }

//   const isDivisible = (first: number, second: number): boolean => first % second === 0;

//   let divide = isDivisible(firstNumber, secondNumber);
//   while (!divide) {
//     firstNumber = getRandomNumber(2, 100);
//     secondNumber = getRandomNumber(2, 10);
//     divide = isDivisible(firstNumber, secondNumber);
//   }

//   questionText = `<p class="text-center">${firstNumber} / ${secondNumber} = ?</p>`;
//   answer = (firstNumber / secondNumber).toString();
//   return [questionText, answer];
// }
