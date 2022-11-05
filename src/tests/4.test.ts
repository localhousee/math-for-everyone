import { expect, it } from "vitest";
import {
  introductionOfEquivalentFractionsWithPictures,
  factor,
  GCD,
  LCM,
  roundingUpTheResultsOfLengthAndWeightMeasurements,
  perimeterAndAreaOfSquaresRectanglesAndTriangles,
} from "../utilities/level/4";

// Introduction of equivalent fractions with pictures
// Determine factor, Greatest Common Divisor (GCD), and Least Common Multiple (LCM)
// Rounding up the results of length and weight measurements
// Perimeter and area of squares, rectangles and triangles
// Squared numbers and square root numbers

it("Will generate a picture of fraction", () => {
  const { question, answer } = introductionOfEquivalentFractionsWithPictures();
  expect(answer).toBeTypeOf("string");

  let arr: Array<string> = [];

  for (let i = 2; i <= 10; i++) {
    arr.push(`1/${i}`);
  }

  expect(arr).toContain(answer);
});

it("Will generate a factor, GCD, or LCM", () => {
  let { question, answer } = factor();
  expect(answer).toBeTypeOf("string");

  ({ question, answer } = GCD());
  expect(answer).toBeGreaterThan(1);
  expect(Number.isSafeInteger(answer)).toBe(true);

  ({ question, answer } = LCM());
  expect(answer).toBeGreaterThan(1);
  expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate a round up result of length, and weight measurements", () => {
  const { question, answer } =
    roundingUpTheResultsOfLengthAndWeightMeasurements();
  expect(answer).toBeGreaterThan(1);
  expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate a perimeter or area of Square, Rectangle, and Triangle", () => {
  const { question, answer } =
    perimeterAndAreaOfSquaresRectanglesAndTriangles();
  expect(answer).toBeGreaterThan(1);
  expect(Number.isSafeInteger(answer)).toBe(true);
});
