# Bolt Journal

## 2026-05-30 - [Prettier Performance Optimization]
**Learning:** In sparse repositories, toolchain execution times can degrade as metadata and artifacts (like those in `.jules/`) accumulate, because tools like Prettier scan all files by default.
**Action:** Proactively implement `.prettierignore` to exclude non-source and metadata directories to maintain sub-second check times.
