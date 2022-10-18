import { getRandomNumber, getRandomBoolean, questionFormat } from "./helpers";

interface shape {
  name: string;
  properties: string[];
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
    properties: [
      "Faces : 6",
      "Edges: 12",
      "Vertices: 8",
      "All sides are same"
    ]
  },
  {
    name: "Rectangle Prism",
    properties: [
      "Faces : 6",
      "Edges: 12",
      "Vertices: 8",
    ]
  },
  {
    name: "Sphere",
    properties: [
      "Curved face: 1",
      "Edges: 0",
      "Vertices: 0",
    ]
  },
  {
    name: "Cone",
    properties: [
      "Flat face: 1",
      "Curved face: 1",
      "Edges: 1",
      "Vertices: 1",
    ]
  },
  {
    name: "Cylinder",
    properties: [
      "Flat face: 2",
      "Curved face: 1",
      "Edges: 2",
      "Vertices: 0",
    ]
  }
];

let answer = "";
let question = "";
const is2D = getRandomBoolean();
let arr: shape[] = [];

if (is2D) arr = twoDimentional;
else arr = threeDimentional;

const shapes = (type: string): Result => {
  if (type.includes("introduction")) ({ question, answer } = introduction());
  else if (type.includes("characteristic")) {
    if (type.includes("advanced")) ({ question, answer } = characteristic(true));
    else ({ question, answer } = characteristic());
  }
  else if (type.includes("symmetry")) ({ question, answer } = symmetry());
  else if (type.includes("angles")) ({ question, answer } = angles());
  return { question, answer };
}

const introduction = (): Result => {
  answer = arr[getRandomNumber(0, arr.length - 1)].name.toLowerCase().replace(" ", "-");
  const question = questionFormat(`<img src="/dimentional-figure/${answer}.png" alt="image" class="w-1/2 h-1/2 mx-auto" />`);
  return { question, answer };
}
const characteristic = (advanced?: boolean): Result => {
  if (advanced) {
    const chosenShape = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
    question = questionFormat(`What shape is it based on this properties? <br/> ${chosenShape.properties.join("<br />")}`);
    answer = chosenShape.name.toLowerCase();
  } else {
    const chosenShape = arr[getRandomNumber(0, arr.length - 1)];
    question = questionFormat(`What shape is it based on this properties? <br/> ${chosenShape.properties.join("<br />")}`);
    answer = chosenShape.name.toLowerCase();
  }
  return { question, answer };
}
const symmetry = (): Result => {
  const chosenShape = arr[getRandomNumber(0, arr.length - 1)];
  question = questionFormat(`How much symmetry in ${chosenShape.name}?`);
  answer = chosenShape.symmetry!.toString();
  return { question, answer };
}
const angles = (): Result => {
  const angles = ["Acute", "Right", "Obtuse", "Straight", "Reflex", "Complete rotation"];
  const answer = angles[getRandomNumber(0, angles.length - 1)].toLowerCase().replace(" ", "-");
  const question = questionFormat(`<img src="/angles/${answer}.png" alt="image" class="w-1/4 h-1/4 mx-auto" />`);
  return { question, answer };
}

export default shapes;
