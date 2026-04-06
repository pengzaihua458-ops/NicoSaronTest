# Bolt Journal

## 2026-04-05 - [Initial Profiling]
**Learning:** In a sparse repository, tool discovery overhead for metadata directories like `.git/` and `.jules/` can be the primary performance bottleneck for developer tooling.
**Action:** Implement `.prettierignore` to exclude these directories and improve linting/formatting speed.
