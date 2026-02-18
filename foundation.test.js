import { describe, it, expect } from "vitest";

describe("Foundational Security", () => {
  it("should have a secure environment", () => {
    expect(process.version).toBeDefined();
    // Verify Node version is >= 20
    const majorVersion = parseInt(process.version.slice(1).split(".")[0], 10);
    expect(majorVersion).toBeGreaterThanOrEqual(20);
  });
});
