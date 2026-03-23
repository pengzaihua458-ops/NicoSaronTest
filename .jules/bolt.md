# Bolt Journal ⚡

## 2026-03-21 - Initializing Bolt Journal
**Learning:** Performance optimization in sparse documentation repositories often centers on tool discovery and developer experience (DX) bottlenecks.
**Action:** Focus on optimizing `prettier` and other tool runtimes by excluding non-essential directories like `.jules/` and large lockfiles from discovery.

## 2026-03-21 - Tool Discovery Optimization via `.prettierignore`
**Learning:** Excluding the `.jules/` directory and `pnpm-lock.yaml` in this repository reduced the `npx prettier --check .` runtime by ~46% (from ~1.21s to ~0.65s) in a full environment simulation.
**Action:** Always use `.prettierignore` to skip large machine-generated files and non-source directories to minimize tool overhead.
