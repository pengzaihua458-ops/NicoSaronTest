# Bolt Journal

## 2026-04-07 - [Initial Performance Baseline]
**Learning:** In a sparse repository, developer tool performance (like Prettier) is the primary area for optimization. Metadata directories like `.jules/` contribute to scan overhead and generate unnecessary warnings.
**Action:** Use `.prettierignore` to exclude non-source metadata directories and stabilize tool execution times.
