import { describe, it, expect } from "vitest";
import { stringCalculator } from "../src/string-calculator";

describe("String Calculator", () => {
  it('should be defined', () => {
    expect(stringCalculator).toBeDefined();
  })

  it('should return 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
  })
});