import { describe, it, expect } from "vitest";
import number from "../utilities/numbers";

describe("type number", () => {
  it("will generate whole number below or equal to limit parameter", () => {
    let { question, answer } = number("whole number", 50);
    expect(parseInt(answer)).to.be.below(50);
    expect(parseInt(answer)).to.be.least(1);
    expect(Number.isSafeInteger(parseInt(answer))).toBe(true);
  });

  it("result of halves, thirds, and fourths are whole number", () => {
    let { question, answer } = number("1/2, 1/3, 1/4", 100);
    expect(parseInt(answer)).to.be.below(100);
    expect(parseInt(answer)).to.be.least(1);
    expect(Number.isSafeInteger(parseInt(answer))).toBe(true);
  });
});