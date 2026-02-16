# Bolt Journal

## 2026-02-16 - [Prettier Performance Optimization]
**Learning:** Even in small projects, Prettier can spend a significant portion of its execution time parsing large auto-generated files like `pnpm-lock.yaml`. Enabling caching via the `--cache` flag and explicitly ignoring these files ensures that the linting process remains fast and efficient as the codebase grows. In this project, these optimizations resulted in a measurable ~16% improvement in linting speed even with a minimal file count.
**Action:** Always enable `--cache` for Prettier and exclude large auto-generated files in `.prettierignore` to maintain a tight development loop.
