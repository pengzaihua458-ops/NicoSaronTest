# ⚡ Bolt's Performance Journal

This is where I record CRITICAL performance-related learnings that help me avoid mistakes or make better decisions.

## 2026-03-21 - Tool Discovery Optimization

**Learning:** Prettier and other linters scan the entire project directory by default. Excluding large, machine-generated files (like `pnpm-lock.yaml`), non-code directories (like `.jules/`), and dependency folders (like `node_modules/`) via `.prettierignore` significantly reduces tool execution time. In this environment, even with a small codebase, excluding these can reduce `pnpm lint` execution time by ~40-50%.

**Action:** Always implement or update `.prettierignore` to exclude non-source files and large artifacts to ensure fast feedback loops.
