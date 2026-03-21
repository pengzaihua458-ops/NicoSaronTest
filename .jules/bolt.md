## 2026-03-21 - Optimizing Tool Discovery Performance
**Learning:** Prettier performance in this repository is significantly impacted by the discovery of large machine-generated files like `pnpm-lock.yaml` and non-code directories like `.jules/`. In a full environment, excluding these files via `.prettierignore` reduced execution time from ~5.3s to ~0.7s (approx. 86% improvement).
**Action:** Proactively exclude non-source files and large metadata files from tool discovery (Prettier, linters, etc.) to maintain fast developer feedback loops.
