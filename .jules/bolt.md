# Bolt's Journal - Critical Learnings Only

This journal contains critical learnings discovered during performance optimization tasks.

## 2026-03-30 - Tool Discovery Overhead in Sparse Branches
**Learning:** In sparse branches with minimal source files, tool discovery overhead (e.g., Prettier scanning `.git/` and metadata directories) accounts for a significant portion of the total execution time. Excluding these via `.prettierignore` provides a measurable speedup in linting and formatting tasks.
**Action:** Always implement `.prettierignore` to exclude large or irrelevant directories like `.git/` and metadata folders to minimize tool discovery latency.
