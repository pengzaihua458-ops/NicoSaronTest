# Bolt Journal

[🏠 Home](../README.md) [🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md) [🎨 Palette Journal](palette.md) [⚡ Bolt Journal](bolt.md)

## 2026-04-12 - [Initial Performance Optimization]

**Learning:** In sparse repositories, tool discovery overhead for linters and formatters like Prettier can be a significant portion of the total execution time, even when the codebase is small.
**Action:** Implement `.prettierignore` to explicitly exclude metadata and non-source directories to stabilize and optimize tool performance.

Performance Benchmark (April 12, 2026): Implementing `.prettierignore` to exclude `.jules/`, `node_modules/`, and `pnpm-lock.yaml` stabilized `npx prettier --check .` execution at ~0.60s and eliminated formatting warnings for documentation journals.
