# Bolt Journal

## 2026-04-07 - [Optimizing Tool Discovery]
**Learning:** In sparse repositories, tool discovery overhead for linters and formatters can be significant when scanning metadata directories like `.jules/`.
**Action:** Implement `.prettierignore` to exclude metadata directories and focus tools on source code.
