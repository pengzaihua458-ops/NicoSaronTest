## 2026-03-04 - [Prettier Performance Optimization]
**Learning:** Formatting large auto-generated files like `pnpm-lock.yaml` and documentation directories like `.jules/` significantly slows down the `pnpm format` command.
**Action:** Always use `.prettierignore` to exclude large, non-source, or non-essential files from Prettier scans to maintain fast developer feedback loops.
