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
