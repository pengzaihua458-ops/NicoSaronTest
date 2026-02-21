# Bolt Journal

## 2026-02-21 - [Optimize Prettier performance]

**Learning:** Prettier scans all files in the directory by default. In this repo, `pnpm-lock.yaml` is ~1300 lines. Even with caching, resolving config for such large files adds overhead.
**Action:** Added `.prettierignore` to skip `pnpm-lock.yaml` and `.jules/`.
**Impact:** Reduced `pnpm lint` execution time from ~0.93s to ~0.83s (~10% improvement).
