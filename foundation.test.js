import { describe, it, expect } from "vitest";

describe("Supply Chain Security", () => {
  it("should restrict built dependencies for supply chain security", async () => {
    const pkg = await import("./package.json");
    expect(pkg.pnpm.onlyBuiltDependencies).toEqual([]);
  });
});
