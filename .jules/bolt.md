# Bolt Journal

## 2026-03-14 - [Optimize Tool Discovery]
**Learning:** Tool discovery overhead in Prettier and other linters can be significantly reduced by explicitly excluding large machine-generated files (like `pnpm-lock.yaml`) and documentation-only directories (like `.jules/`).
**Action:** Always implement a `.prettierignore` file that excludes these non-source paths to maintain fast linting and formatting cycles.
