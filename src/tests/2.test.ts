import { it, expect } from "vitest";
import {
    introductionToWholeNumberUntil100,
    additionAndSubtractionOfWholeNumberUntil100,
    multiplicationAndDivisionOfWholeNumberUntil100,
    introductionToHalvesThirdsAndFourth
} from "../utilities/level/2";

// "Introduction to whole number until 100"
// "Addition and subtraction of whole number until 100"
// "Multiplication and division of whole number until 100"
// "Introduction to 1/2, 1/3 and 1/4"

it("Will generate whole number until 100", () => {
    let { question, answer } = introductionToWholeNumberUntil100();
    expect(answer).toBeLessThan(100);
    expect(answer).toBeGreaterThanOrEqual(1);
    expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate addition and subtraction of whole number until 100", () => {
    let { question, answer } = additionAndSubtractionOfWholeNumberUntil100();
    expect(answer).toBeLessThanOrEqual(100);
    expect(answer).toBeGreaterThanOrEqual(1);
    expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate multiplication and division of whole number until 100", () => {
    let { question, answer } = multiplicationAndDivisionOfWholeNumberUntil100();
    expect(answer).toBeLessThanOrEqual(100);
    expect(answer).toBeGreaterThanOrEqual(1);
    expect(Number.isSafeInteger(answer)).toBe(true);
});

it("Will generate 1/2, 1/3, or 1/4 of number", () => {
    let { question, answer } = introductionToHalvesThirdsAndFourth();
    expect(answer).toBeLessThanOrEqual(100);
    expect(answer).toBeGreaterThanOrEqual(1);
    expect(Number.isSafeInteger(answer)).toBe(true);
});
