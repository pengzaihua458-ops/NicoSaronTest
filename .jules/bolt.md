# Bolt Journal

## 2026-03-19 - [Optimize Tool Discovery Performance]
**Learning:** In environments with large lockfiles and non-code directories (like `.jules/`), tools like Prettier spend significant time scanning files that do not require formatting.
**Action:** Always implement `.prettierignore` to explicitly exclude these directories and files. In this repository, excluding `pnpm-lock.yaml`, `node_modules/`, and `.jules/` reduced Prettier execution time by over 40% (from ~1.1s baseline to ~0.63s).
