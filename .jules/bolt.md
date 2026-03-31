## 2026-03-30 - [Tool Discovery Optimization]
**Learning:** In sparse documentation branches, tool discovery overhead from metadata directories like .jules/ is a significant performance bottleneck during linting.
**Action:** Use .prettierignore to exclude non-source directories and large machine-generated files to reduce scan latency.
