# Bolt Journal

## 2026-04-20 - [Optimize Prettier performance with .prettierignore]
**Learning:** Prettier traverses the entire directory tree by default. In this repository, excluding the `.jules/` directory from Prettier scans reduces execution time by avoiding unnecessary processing of internal metadata files.
**Action:** Implement `.prettierignore` to exclude the `.jules/` directory.
