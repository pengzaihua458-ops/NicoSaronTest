## 2026-03-21 - Optimize tool discovery with .prettierignore
**Learning:** Even in sparse documentation branches, large machine-generated files like `pnpm-lock.yaml` and local `node_modules/` (used for verification) can significantly slow down tool discovery and linting. Adding a `.prettierignore` file reduces `pnpm lint` execution time by ~45% (from ~1.1s to ~0.6s) in this environment.
**Action:** Always include a `.prettierignore` that excludes large non-source files and build/tooling artifacts to ensure consistent developer experience and tool performance.
