import { describe, it, expect } from "vitest";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("A falsy statement", () => {
  it("should not be equal to 3", () => {
    expect(1 + 1).not.toEqual(3);
  });
});
