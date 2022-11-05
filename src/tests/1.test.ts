import { it, expect } from "vitest";
import {
  introductionToWholeNumberUntil50,
  additionAndSubtractionOfWholeNumberUntil20,
  introductionTo2D3D,
  comparingLengthWeightAndTime,
} from "../utilities/level/1";
import { twoDimentional, threeDimentional } from "../utilities/helpers";

// "Introduction to whole number until 50"
// "Addition and subtraction of whole number until 20"
// "Introduction to 2D and 3D shapes"
// "Comparing length, weight, and time"

it("Will generate whole number until 50", () => {
  const { question, answer } = introductionToWholeNumberUntil50();
  expect(answer).toBeLessThan(50);
  expect(answer).toBeGreaterThanOrEqual(1);
  expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate addition and subtraction of whole number until 20", () => {
  const { question, answer } = additionAndSubtractionOfWholeNumberUntil20();
  expect(answer).toBeLessThanOrEqual(20);
  expect(answer).toBeGreaterThanOrEqual(1);
  expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate image of 2D or 3D shapes", () => {
  const { question, answer } = introductionTo2D3D();

  const arr: Array<string> = [];
  twoDimentional.forEach((el) => arr.push(el.name.toLowerCase()));
  threeDimentional.forEach((el) => arr.push(el.name.toLowerCase()));

  expect(answer).toBeTypeOf("string");
  expect(arr).toContain(answer);
});

it("Will generate image of 2D or 3D shapes", () => {
  const { question, answer } = comparingLengthWeightAndTime();
  expect(["<", ">"]).toContain(answer);
});
