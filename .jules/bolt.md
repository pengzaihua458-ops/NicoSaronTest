# Bolt Journal

## 2026-03-12 - [Prettier Discovery Optimization]
**Learning:** In this codebase, tool discovery (especially Prettier) significantly slows down as the repository grows with foundation files (like `pnpm-lock.yaml`). By proactively ignoring non-code and large machine-generated files, we maintain a sub-second linting baseline.
**Action:** Implemented `.prettierignore` to exclude `.jules/`, `node_modules/`, and `pnpm-lock.yaml`.
**Metrics:**
- Baseline (with foundation files): ~1.01s
- Optimized (with .prettierignore): ~0.60s
- Impact: ~40% reduction in execution time (~410ms saved).
