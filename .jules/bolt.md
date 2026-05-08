# Bolt Journal ⚡

## 2026-05-07 - Journal Initialization
**Learning:** Initialized Bolt's performance journal in a sparse repository.
**Action:** Always check for .jules/bolt.md at the start of a task.

## 2026-05-07 - Tool Discovery Optimization
**Learning:** In sparse repositories with minimal code, tool discovery performance is significantly impacted by non-source, growing directory trees like `.jules/`. Explicitly ignoring these in `.prettierignore` reduced `prettier --check` time by over 80% (from ~5.6s to ~1.0s).
**Action:** Prioritize excluding large or non-source directories from tool discovery paths to maintain fast linting/formatting as the project grows.
