# Bolt Journal - Performance Learnings

## 2026-04-02 - Optimizing Tool Discovery in Sparse Repositories
**Learning:** In sparse repositories with minimal files, tool discovery overhead from metadata directories like `.git/` and `.jules/` can be a significant bottleneck for linting and formatting.
**Action:** Always implement a `.prettierignore` file to exclude non-source directories and large machine-generated files early in the project.
