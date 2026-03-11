# Bolt Journal

## 2026-03-11 - [Initial Setup]
**Learning:** The repository is currently in a foundational state with minimal code. Tool discovery overhead is the primary performance bottleneck at this stage.
**Action:** Focus on optimizing linting and formatting by excluding non-code directories and large generated files.

## 2026-03-11 - [Optimized Prettier Discovery]
**Learning:** Excluding non-code directories like `.jules/` and large generated files like `pnpm-lock.yaml` from Prettier scans significantly reduces tool discovery overhead. Even in a small repository, this can save several seconds on the first run and keep subsequent runs lightning fast.
**Action:** Always maintain an up-to-date `.prettierignore` file to ensure only relevant source code is processed.
