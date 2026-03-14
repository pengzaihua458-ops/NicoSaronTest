# Bolt Journal

## 2026-03-14 - Optimizing Tool Discovery
**Learning:** Excluding large, machine-generated files (like `pnpm-lock.yaml`) and non-code directories (like `.jules/`) from Prettier scans significantly reduces linting overhead. In this environment, it prevents Prettier from scanning a 32K lockfile and the journal files, maintaining a sub-second linting cycle.
**Action:** Always implement a `.prettierignore` file in new repositories to ensure linters and formatters focus only on source code.
