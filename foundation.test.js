import { describe, it, expect } from "vitest";

describe("Foundation", () => {
  it("should have a stable testing environment", () => {
    expect(true).toBe(true);
  });

  it("should enforce Node.js version", () => {
    const version = process.versions.node.split(".")[0];
    expect(parseInt(version)).toBeGreaterThanOrEqual(20);
  });
});
