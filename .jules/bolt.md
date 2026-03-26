# Bolt Journal

## 2026-03-21 - [Optimizing Tool Discovery with .prettierignore]
**Learning:** In a sparse documentation branch with large lockfiles and nested metadata directories like `.jules/`, Prettier's default tool discovery scans all files, significantly increasing execution time even for small changes. Excluding these non-source files via `.prettierignore` drastically reduces the scanning overhead.
**Action:** Always implement a `.prettierignore` in foundational repositories to skip large, machine-generated files (like `pnpm-lock.yaml`) and metadata directories (like `.jules/`) to maintain peak linting performance.
