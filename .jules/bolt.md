# Bolt Journal

## 2026-04-03 - [Optimizing Tool Discovery Performance]
**Learning:** In a sparse repository with minimal files, tool discovery overhead from metadata directories like `.git/` and `.jules/` can be a significant bottleneck for linting and formatting.
**Action:** Implementing a robust `.prettierignore` file reduced `npx prettier --check .` execution time from ~0.68s to ~0.56s (approx. 17% improvement) and resolved formatting warnings for metadata in `.jules/`.
