import { describe, it, expect } from "vitest";
import number from "@/utilities/numbers";

describe("type number", () => {
  it("will generate whole number below or equal to limit parameter", () => {
    let { question, answer } = number("whole number", 50);
    expect(parseInt(answer)).to.be.below(50);
    expect(parseInt(answer)).to.be.least(1);
  });
});