# Bolt Journal

## 2026-03-06 - [Optimize Tool Discovery]
**Learning:** Tools like Prettier scan the entire repository by default, including documentation-only directories like `.jules/`, which can lead to unnecessary processing and formatting warnings for non-code files.
**Action:** Use `.prettierignore` to exclude non-essential directories, reducing discovery overhead and focusing tools on relevant source files.
