# Bolt Journal

## 2026-03-21 - [Tool Discovery Optimization]
**Learning:** Large machine-generated files (like `pnpm-lock.yaml`) and documentation trees (like `.jules/`) increase tool discovery overhead in Prettier, even when `--cache` is used. Excluding them via `.prettierignore` can significantly improve linting performance in full environments.
**Action:** Always implement `.prettierignore` to exclude non-source files and large machine-generated artifacts to maintain peak tool performance.
