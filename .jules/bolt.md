# Bolt Journal

## 2026-03-17 - [Initial Performance Baseline]
**Learning:** In a sparse repository, tool discovery overhead for linters like Prettier is the primary performance bottleneck.
**Action:** Implement `.prettierignore` to skip non-code directories like `.jules/` and internal VCS folders to ensure fast linting cycles from the start.
