# Bolt Journal

## 2026-03-12 - [Initial Tool Discovery Optimization]
**Learning:** Tooling like Prettier can experience significant performance degradation when scanning large, machine-generated files like `pnpm-lock.yaml` or non-code directories like `.jules/`.
**Action:** Always implement a `.prettierignore` file (and equivalent for other tools) to exclude non-essential files from tool discovery, maintaining sub-second linting/formatting cycles.
