import { describe, it, expect } from "vitest";
import pkg from "./package.json";

describe("Foundational Security", () => {
  it("should enforce supply chain hardening", () => {
    // Ensure onlyBuiltDependencies is an empty array to block unauthorized scripts
    expect(pkg.pnpm.onlyBuiltDependencies).toEqual([]);
  });

  it("should have a secure environment", () => {
    expect(process.version).toBeDefined();
    const majorVersion = parseInt(process.version.slice(1).split(".")[0], 10);
    expect(majorVersion).toBeGreaterThanOrEqual(20);
  });
});
