import { it, expect } from "vitest";
import {
  introductionToSimpleFractionAndWholeNumbersUpTo1000,
  relationshipBetweenStandardUnitsForLengthWeightAndTime,
  symmetryOn2D,
  introductionToTypesOfAngles,
  characteristicsOfVarious2D,
} from "../utilities/level/3";
import { twoDimentional, angles } from "../utilities/helpers";

// "Introduction to simple fractions and whole numbers up to 1000"
// "Relationship between standard units for length, weight, and time"
// "Symmetry on 2D shapes"
// "Introduction to types of angles"
// "Characteristics of various 2D shapes"

it("Will generate simple fractions and whole number until 1000", () => {
  const { question, answer } =
    introductionToSimpleFractionAndWholeNumbersUpTo1000();
  expect(answer).toBeLessThan(1000);
  expect(answer).toBeGreaterThanOrEqual(1);
  expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate relationship of length, weight, and time", () => {
  const { question, answer } =
    relationshipBetweenStandardUnitsForLengthWeightAndTime();
  expect(answer).toBeLessThanOrEqual(1000);
  expect(answer).toBeGreaterThan(1);
});

it("Will generate symmetry on 2D shapes", () => {
  const { question, answer } = symmetryOn2D();
  expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate types of angles", () => {
  const { question, answer } = introductionToTypesOfAngles();
  expect(answer).toBeTypeOf("string");

  const arr: Array<string> = angles.map((el) => el.toLowerCase());
  expect(arr).toContain(answer);
});

it("Will generate characteristics of 2D shapes", () => {
  const { question, answer } = characteristicsOfVarious2D();
  expect(answer).toBeTypeOf("string");

  const arr = twoDimentional.map((el) => el.name.toLowerCase());
  expect(arr).toContain(answer);
});
