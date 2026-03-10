# Bolt Journal

## 2026-03-10 - [Optimize Prettier Discovery]
**Learning:** Prettier attempts to parse and check all files in the directory by default, including large generated files like `pnpm-lock.yaml`. In this repository, a 20,000-line lockfile caused `pnpm lint` to take ~5.1s and eventually fail due to parsing errors when it was improperly concatenated for testing. Excluding it via `.prettierignore` reduced the execution time to ~0.6s (~88% improvement).
**Action:** Always ensure large generated files, tool caches, and non-code documentation directories (like `.jules/`) are excluded from Prettier scans using `.prettierignore` to maintain fast linting and formatting cycles.
