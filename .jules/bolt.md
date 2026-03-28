# Bolt Journal

## 2026-03-21 - [Optimize tool discovery with .prettierignore]
**Learning:** In a sparse repository, Prettier still scans excluded directories and large lockfiles unless explicitly ignored via `.prettierignore`. Excluding `pnpm-lock.yaml`, `node_modules/`, and `.jules/` reduced `pnpm lint` user time from ~0.691s to ~0.576s (approx. 16% improvement) even in a minimal environment.
**Action:** Always implement `.prettierignore` to skip large machine-generated files and non-source directories to optimize tool discovery and execution speed.
