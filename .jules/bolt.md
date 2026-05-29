# Bolt Journal

## 2026-05-29 - [Initial Performance Baseline]
**Learning:** In a sparse repository, toolchain performance (e.g., Prettier) is the primary area for optimization. Metadata directories like `.jules/` can be excluded to maintain fast check times as the project grows.
**Action:** Implement `.prettierignore` to exclude metadata and build artifacts.
