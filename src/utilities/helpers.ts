import level from "./levels";

export const getRandomNumber = (min: number, max: number): number => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

interface Theory {
  name: string;
  description: string;
};

export const getRandomTheory = (value: number): Theory => {
  const theory = level[value];
  return theory[getRandomNumber(0, theory.length - 1)];
}

export const questionFormat = (question: string): string => `<p class="text-center">${question}</p>`;