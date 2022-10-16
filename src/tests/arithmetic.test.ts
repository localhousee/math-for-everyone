import { it, expect } from "vitest";
import arithmetic from "../utilities/arithmetic";

it("result of addition or subtraction is whole number, above 0, and below limit parameter", () => {
  let { question, answer } = arithmetic("addition and subtraction", 20);
  expect(parseInt(answer)).to.be.below(20);
  expect(parseInt(answer)).to.be.least(1);
  expect(Number.isSafeInteger(parseInt(answer))).toBe(true);
});
