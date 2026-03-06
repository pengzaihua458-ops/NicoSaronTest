import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Foundational Security", () => {
  it("should have a secure environment", () => {
    expect(process.version).toBeDefined();
    // Verify Node version is >= 20
    const majorVersion = parseInt(process.version.slice(1).split(".")[0], 10);
    expect(majorVersion).toBeGreaterThanOrEqual(20);
  });

  it("should enforce supply chain security via onlyBuiltDependencies", () => {
    const pkgPath = path.resolve(process.cwd(), "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    expect(pkg.pnpm).toBeDefined();
    expect(pkg.pnpm.onlyBuiltDependencies).toBeDefined();
    expect(pkg.pnpm.onlyBuiltDependencies).toEqual([]);
  });
});
