# Bolt Journal

## 2025-03-09 - [Initial Performance Baselining]
**Learning:** In minimal repositories, tool discovery overhead is dominated by scanning and parsing large generated files like `pnpm-lock.yaml` or extensive documentation in `.jules/`.
**Action:** Proactively implement `.prettierignore` to exclude non-code/documentation heavy directories to maintain lightning-fast developer workflows as the project scales.
