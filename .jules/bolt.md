# Bolt Journal

## 2026-04-14 - [Optimizing Tool Discovery]
**Learning:** In sparse environments, tool discovery overhead from metadata directories like `.jules/` and `node_modules/` can be a perceived bottleneck. Explicitly ignoring these in `.prettierignore` stabilizes execution and ensures tooling focus is strictly on source-relevant files.
**Action:** Implement `.prettierignore` to exclude metadata and non-source directories to optimize developer tooling discovery and performance.
