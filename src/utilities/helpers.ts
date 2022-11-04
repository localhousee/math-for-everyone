export const getRandomNumber = (min: number, max: number): number => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export const getRandomTheory = (value: number) => {
  // const theory = 
}

export const getRandomBoolean = (): boolean => Math.random() < 0.5;

export const questionFormat = (question: string): string => `<p class="text-center">${question}</p>`;

export const twoDimentional: Array<TwoDimention> = [
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
    symmetry: Infinity,
  },
];

export const threeDimentional: Array<ThreeDimention> = [
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

export const lengths: Array<Unit> = [
  { name: "Kilometer", count: 1000000 },
  { name: "Hectometer", count: 100000 },
  { name: "Dekameter", count: 10000 },
  { name: "Meter", count: 1000 },
  { name: "Decimeter", count: 100 },
  { name: "Centimeter", count: 10 },
  { name: "Milimeter", count: 1 },
];

export const weights: Array<Unit> = [
  { name: "Kilogram", count: 1000000 },
  { name: "Hectogram", count: 100000 },
  { name: "Dekagram", count: 10000 },
  { name: "Gram", count: 1000 },
  { name: "Decigram", count: 100 },
  { name: "Centigram", count: 10 },
  { name: "Miligram", count: 1 }
];

export const lengthsOfTime: Array<Unit> = [
  { name: "Year", count: 60 * 60 * 24 * 30 * 12 },
  { name: "Month", count: 60 * 60 * 24 * 30 },
  { name: "Week", count: 60 * 60 * 24 * 7 },
  { name: "Day", count: 60 * 60 * 24 },
  { name: "Hour", count: 60 * 60 },
  { name: "Minute", count: 60 },
  { name: "Second", count: 1 },
];