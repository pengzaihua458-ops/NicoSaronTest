# Bolt's Journal - Critical Learnings Only

This journal contains critical learnings discovered during performance optimization tasks.

## 2026-03-29 - Tool Discovery Latency in Sparse Branches
**Learning:** In sparse documentation branches with minimal source files, the overhead of tool discovery (e.g., Prettier scanning `pnpm-lock.yaml` and `.jules/` metadata) represents a significant portion of execution time. Excluding these files via `.prettierignore` consistently reduces `pnpm lint` execution time and resolves non-critical formatting warnings in documentation files.
**Action:** Always implement `.prettierignore` for large machine-generated files and metadata directories to minimize tool discovery overhead and maintain clean linting states.
