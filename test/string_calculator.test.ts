import { expect } from "chai";
import { add } from "../index";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("should return the number itself for a single number", () => {
    expect(add("1")).to.equal(1);
  });

  it("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).to.equal(3);
  });

  it("should handle an unknown amount of numbers", () => {
    expect(add("1,2,3,4")).to.equal(10);
  });

  it("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2")).to.equal(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3")).to.throw("negative numbers not allowed: -2");
  });

  it("should show all negative numbers in the exception message", () => {
    expect(() => add("-1,-2,-3")).to.throw("negative numbers not allowed: -1,-2,-3");
  });
});
