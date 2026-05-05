# Bolt Journal

## 2026-05-05 - [Optimize Tool Discovery via .prettierignore]
**Learning:** In sparse repositories with growing documentation and agent journals, tool discovery (e.g., Prettier) can be slowed down by scanning non-essential or large directories like `.jules/`. Prettier automatically ignores `.git/`, so manual exclusion is redundant and adds no performance value.
**Action:** Use `.prettierignore` to explicitly exclude `.jules/` and `pnpm-lock.yaml` to reduce I/O overhead. Avoid adding default-ignored directories like `.git/`.
