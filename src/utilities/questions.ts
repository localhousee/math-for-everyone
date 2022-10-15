export const arrayOfLevels = [
  ["Introduction to whole number until 50", "Addition and subtraction of whole number until 20", "Introduction to two-dimentional and three-dimentional figure", "Comparing length, weight, length of time, and temperature"],
  ["Introduction to whole number until 100", "Addition and subtraction of whole number until 100", "Multiplication and division of whole number until 100", "Introduction to currency values and equivalence", "Determine length, weight, and time in standard units", "Introduction to the fractions 1/2, 1/3 , and 1/4", "Characteristics of two-dimentional and three-dimentional figure"],
  ["Introduction to whole numbers up to 1000 and simple fractions", "Relationship between standard units for length, weight, and time", "Simetri lipat dan simetri putar pada bangun datar", "Introduction to angles and types of angles", "Characteristics of various two-dimentional figure", "Introduction to simple drawing diagrams"],
  ["Introduction of equivalent fractions with pictures", "Determine factor, common factor, Greatest Common Divisor (GCD), and Least Common Multiple (LCM)", "Rounding up the results of length and weight measurements", "Perimeter and area of squares, rectangles and triangles", "Squared numbers and square root numbers", "Simple bar chart introduction", "Determine the size of the angle on a two-dimentional figure in standard units"],
  ["Adding and subtracting two fractions with different denominators", "Introduction to decimal fractions and percent", "Recognition of scale through floor plans", "Finding nets of cubes and blocks", "Presentation of data in the form of tables, bar and line charts"],
  ["Recognition of negative integers using the number line", "Mixed arithmetic operations with whole numbers, fractions and/or decimals", "Elements, circumference and area of a circle", "Introduction to cubes, blocks, prisms, pyramids, tubes, cones", "Introduction of modus, median, and mean of single data"],
  ["Operations to count integers and fractions", "Sets, subsets, and binary operations on two sets", "One variable linear equations and inequalities", "The ratio of two scales and proportions, speed and discharge", "Social arithmetic", "Perimeter and area formulas for different types of quadrilaterals and triangles", "The angle of two parallel lines cut by the transversal", "Data presentation (tables, line charts, bars, and pie)"],
  ["Number sequence pattern and object configuration sequence", "The position of a point in the Cartesian coordinate plane", "Relationships and functions", "Linear function", "Two-variable system of linear equations", "Pythagorean Theorem", "Surface area and volume of flat side three-dimentional figure", "Summing up the mean, median, mode, and distribution of the data", "Probability of an event from an experiment"],
  ["Operations on numbers to the power of rational numbers and the form of roots", "Quadratic equation and its roots", "Quadratic functions in the form of tables, equations, and graphs", "Discriminant of quadratic functions and graphs", "Similarity and congruence between flat shapes", "Surface area and volume of curved side three-dimentional figure"],
  ["Equations and inequalities absolute value linear form of one variable", "Three-variable system of linear equations", "System of inequalities of two variables", "Linear functions, quadratic functions, and rational functions", "Composition of functions and inverse functions", "Trigonometric ratios in a right triangle", "Trigonometric comparison of related angles", "Sine and cosine rules"],
  ["Two-variable linear program", "Matrix equality and matrix operations", "The determinant and inverse of a matrix of the order 2x2", "Arithmetic and Geometric Sequences", "Limits of algebraic functions", "Derivatives of algebraic functions", "Maximum and minimum values", "Indeterminate integrals of algebraic functions"],
  ["Distance in space", "The size of the cluster data concentration and spread", "Rules for counting, permutations, and combinations", "Probability of compound events"]
];

export function generateQuestion(level: number) {
  let title = getRandomTheory(level - 1);
  let description = "";
  let answer = "";
  if (title.includes("Introduction to whole number until")) {
    const limit = title.split(" ").pop()!;
    let result = introductionToWholeNumber(parseInt(limit));
    description = result[0];
    answer = result[1];
  } else if (title.includes("Addition and subtraction of whole number until")) {
    const limit = title.split(" ").pop()!;
    let result = additionAndSubtraction(parseInt(limit));
    description = result[0];
    answer = result[1];
  } else if (title.includes("two-dimentional and three-dimentional")) {
    const type = title.split(" ").shift()!;
    let result = dimentionalFigure(type)!;
    description = result[0];
    answer = result[1];
  } else if (title.includes("length, weight, length of time, and temperature")) {
    let result = lengthWeightAndTemperature()!;
    description = result[0];
    answer = result[1];
  }
  return { title, description, answer };
};

const getRandomNumber = (min: number, max: number): number => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

const getRandomTheory = (value: number) => {
  const level = arrayOfLevels[value];
  return level[getRandomNumber(0, level.length - 1)];
}

const introductionToWholeNumber = (limit: number) => {
  let answer = 0;
  let question = 0;
  let number = 0;
  let operator = false;
  while (answer <= 0) {
    question = getRandomNumber(0, limit - 4);
    number = getRandomNumber(1, 4);
    operator = Math.random() < 0.5;
    answer = operator ? question - number : question + number;
  }
  const questionText = `<p class="text-center">What's ${number} number ${operator ? "before" : "after"} ${question}?</p>`;
  const result = [questionText, answer.toString()];
  return result;
}

const additionAndSubtraction = (limit: number) => {
  let answer = 0;
  let first = 0;
  let second = 0;
  let operator = false;
  while (answer <= 0 || answer > 20) {
    first = getRandomNumber(1, limit);
    second = getRandomNumber(1, limit);
    operator = Math.random() < 0.5;
    answer = operator ? first - second : first + second;
  }
  const questionText = `<p class="text-center">${first} ${operator ? "-" : "+"} ${second} = ?</p>`;
  const result = [questionText, answer.toString()];
  return result;
}

const dimentionalFigure = (type: string) => {
  let answer = "";
  const twoDimentional = ["circle", "kite", "parallelogram", "rectangle", "rhombus", "square", "trapezoid", "triangle"];
  const threeDimentional = ["cone", "cube", "cylinder", "rectangle prism", "sphere"];
  const shape = Math.random() < 0.5;
  if (type === "Introduction") {
    if (shape) {
      answer = twoDimentional[getRandomNumber(0, twoDimentional.length - 1)];
    } else {
      answer = threeDimentional[getRandomNumber(0, threeDimentional.length - 1)].replace(" ", "-");
    }
    const questionText = `<img src="/dimentional-figure/${answer}.png" alt="image" class="w-1/2 h-1/2 mx-auto" />`;
    const result: [string, string] = [questionText, answer];
    return result;
  }
}

const lengthWeightAndTemperature = () => {
  type Unit = { name: string; count: number };
  const lengths: Unit[] = [{ name: "Inch", count: 2.5 }, { name: "Feet", count: 30 }, { name: "Yard", count: 90 }, { name: "Miles", count: 16000 }];
  const temperatures: Unit[] = [{ name: "Celcius", count: 5 }, { name: "Kelvin", count: 5 }, { name: "Reamur", count: 4 }, { name: "Fahrenheit", count: 9 }];
  const weights: Unit[] = [{ name: "Tonne", count: 1000000000 }, { name: "Ounce", count: 28349.5 }, { name: "Pound", count: 453592 }, { name: "Kilogram", count: 1000000 }, { name: "Hectogram", count: 100000 }, { name: "Gram", count: 1000 }, { name: "Decigram", count: 100 }, { name: "Centigram", count: 10 }, { name: "Miligram", count: 1 }];
  const lengthsOfTime: Unit[] = [{ name: "Second", count: 1 }, { name: "Minute", count: 60 }, { name: "Hour", count: 3600 }, { name: "Day", count: 86400 }, { name: "Month", count: 2592000 }, { name: "Year", count: 31104000 }];

  const choice = getRandomNumber(1, 4);
  let firstNumber = 0;
  let secondNumber = 0;
  let firstUnit: Unit = { name: "", count: 0 };
  let secondUnit: Unit = { name: "", count: 0 };
  let arr: Unit[] = [];
  if (choice === 1) arr = lengths;
  else if (choice === 2) arr = temperatures;
  else if (choice === 3) arr = weights;
  else if (choice === 4) arr = lengthsOfTime;

  firstUnit = arr[getRandomNumber(0, arr.length - 1)];
  secondUnit = arr[getRandomNumber(0, arr.length - 1)];
  if (firstUnit.count < secondUnit.count) {
    firstNumber = getRandomNumber(10, 100);
    secondNumber = getRandomNumber(1, 10);
  } else {
    firstNumber = getRandomNumber(1, 10);
    secondNumber = getRandomNumber(10, 100);
  }

  if (firstUnit.name === "Fahrenheit") firstNumber += 32;
  else if (secondUnit.name === "Fahrenheit") secondNumber += 32;
  else if (firstUnit.name === "Kelvin") firstNumber += 273;
  else if (secondUnit.name === "Kelvin") secondNumber += 273;

  const answer = firstNumber * firstUnit.count > secondNumber * secondUnit.count ? ">" : "<";
  const questionText = `<p class="text-center">Type "<" or ">" <br /> ${firstNumber} ${firstUnit.name} ... ${secondNumber} ${secondUnit.name}</p>`;
  const result: [string, string] = [questionText, answer];
  return result;
}
