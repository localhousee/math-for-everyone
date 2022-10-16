import { getRandomNumber, questionFormat } from "./helpers";

const twoDimentional = ["Circle", "Kite", "Parallelogram", "Rectangle", "Rhombus", "Square", "Trapezoid", "Triangle"];
const threeDimentional = ["Cone", "Cube", "Cylinder", "Rectangle Prism", "Sphere"];

const shapes = (type: string): Result => {
  let question = "";
  let answer = "";
  if (type.includes("introduction")) ({ question, answer } = introduction());

  return { question, answer };
}

const introduction = (): Result => {
  let answer = "";
  const is2D = Math.random() < 0.5;

  if (is2D) answer = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)].toLowerCase()
  else answer = threeDimentional[getRandomNumber(0, threeDimentional.length - 1)].replace(" ", "-").toLowerCase(); 

  const question = questionFormat(`<img src="/dimentional-figure/${answer}.png" alt="image" class="w-1/2 h-1/2 mx-auto" />`);
  return { question, answer };
}

export default shapes;
