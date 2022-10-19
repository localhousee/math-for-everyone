import { getRandomNumber, getRandomBoolean, questionFormat } from "./helpers";

interface shape {
  name: string;
  properties?: string[];
  symmetry?: number | string;
};
const twoDimentional: shape[] = [
  {
    name: "Triangle",
    properties: [
      "It has three straight sides",
      "It has three angles",
      "It has three vertices",
    ],
    symmetry: 3,
  },
  {
    name: "Square",
    properties: [
      "It has four sides",
      "Four equal angles each measuring 90°",
      "All sides are in equal length"
    ],
    symmetry: 4,
  },
  {
    name: "Rectangle",
    properties: [
      "It has four sides",
      "Four equal angles each measuring 90°",
      "The opposite sides are equal in length",
      "It has two pairs of parallel sides"
    ],
    symmetry: 2,
  },
  {
    name: "Parallelogram",
    properties: [
      "It has two pairs of parallel sides",
      "The opposite sides are equal in length",
      "The opposite angles are of equal measure"
    ],
    symmetry: 2,
  },
  {
    name: "Rhombus",
    properties: [
      "It has four sides",
      "It is a special type of quadrilateral whose all sides are equal in length"
    ],
    symmetry: 4,
  },
  {
    name: "Trapezoid",
    properties: [
      "It has four sides",
      "one pair of opposite sides parallel to each other",
      "another sides of it are non parallel"
    ],
    symmetry: 1,
  },
  {
    name: "Kite",
    properties: [
      "It has four sides",
      "Sides are grouped into two pairs of equal sides that are adjacent to each other"
    ],
    symmetry: 1,
  },
  {
    name: "Circle",
    properties: [
      "It is made up of a curved line",
      "It has no corners or edges",
    ],
    symmetry: "infinity",
  },
];
const threeDimentional: shape[] = [
  {
    name: "Cube",
  },
  {
    name: "Rectangle Prism",
  },
  {
    name: "Sphere",
  },
  {
    name: "Cone",
  },
  {
    name: "Cylinder",
  }
];

const shapes = (type: string): Result => {
  let answer = "";
  let question = "";
  if (type.includes("introduction")) ({ question, answer } = introduction());
  else if (type.includes("characteristic")) ({ question, answer } = characteristic());
  else if (type.includes("symmetry")) ({ question, answer } = symmetry());
  else if (type.includes("angles")) ({ question, answer } = angles());
  else if (type.includes("perimeter and area")) ({ question, answer } = perimeterAndArea());
  return { question, answer };
}

const introduction = (): Result => {
  const is2D = getRandomBoolean();
  let arr = [];
  if (is2D) arr = twoDimentional;
  else arr = threeDimentional;

  const answer = arr[getRandomNumber(0, arr.length - 1)].name.toLowerCase().replace(" ", "-");
  const question = questionFormat(`<img src="/dimentional-figure/${answer}.png" alt="image" class="w-1/4 h-1/4 mx-auto" />`);
  return { question, answer };
}
const characteristic = (): Result => {
  const shape = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
  const question = questionFormat(`What shape is it based on this properties?<br/> ${shape.properties!.join("<br />")}`);
  const answer = shape.name.toLowerCase();
  return { question, answer };
}
const symmetry = (): Result => {
  const shape = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
  const question = questionFormat(`How much symmetry in ${shape.name}?`);
  const answer = shape.symmetry!.toString();
  return { question, answer };
}
const angles = (): Result => {
  const angles = ["Acute", "Right", "Obtuse", "Straight", "Reflex", "Complete rotation"];
  const answer = angles[getRandomNumber(0, angles.length - 1)].toLowerCase().replace(" ", "-");
  const question = questionFormat(`<img src="/angles/${answer}.png" alt="image" class="w-1/4 h-1/4 mx-auto" />`);
  return { question, answer };
}
const perimeterAndArea = (): Result => {
  const shape = getRandomNumber(1, 3);
  let result = 0;
  let question = "";
  if (shape === 1) { // Square 
    const side = getRandomNumber(2, 10);
    const isArea = getRandomBoolean();
    if (isArea) result = Math.pow(side, 2);
    else result = 4 * side
    question = questionFormat(`Square: Side = ${side} cm <br />${isArea ? "Area" : "Perimeter"} = ... cm?`);
  } else if (shape === 2) { // Rectangle
    let firstNumber = getRandomNumber(2, 10);
    let secondNumber = getRandomNumber(2, 10);

    // Regenerate number if both number is same
    while (firstNumber === secondNumber) {
      secondNumber = getRandomNumber(2, 10);
    }

    const isArea = getRandomBoolean();
    if (isArea) result = firstNumber * secondNumber;
    else result = 2 * (firstNumber + secondNumber);

    question = questionFormat(`Rectangle: Length = ${firstNumber} cm, Width = ${secondNumber} <br />${isArea ? "Area" : "Perimeter"} = ... cm?`);
  } else { // Triangle
    const isArea = getRandomBoolean();
    if (isArea) {
      let firstNumber = getRandomNumber(2, 10);
      let secondNumber = getRandomNumber(2, 10);
      result = firstNumber * secondNumber / 2;
      question = questionFormat(`Triangle: Base = ${firstNumber} cm, Height = ${secondNumber} cm <br />Area = ...cm?`);

    } else {
      let number = getRandomNumber(2, 10);
      result = 3 * number;
      question = questionFormat(`Triangle: Side = ${number} cm <br />Perimeter = ...cm?`);
    }
  }
  const answer = result.toString();
  return { question, answer };
}

export default shapes;
