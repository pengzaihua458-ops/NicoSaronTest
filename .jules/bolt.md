# Bolt Journal

## 2026-05-12 - [Initial Setup]
**Learning:** Initializing Bolt's performance journal in a sparse repository.
**Action:** Establish performance baseline and identify high-impact, small-scale optimizations.

## 2026-05-12 - [Prettier Performance Optimization]
**Learning:** In sparse repositories where agent metadata (like `.jules/` journals) can grow larger than the application code, Prettier's default scanning behavior becomes a bottleneck. Excluding these non-source directories can reduce formatting time by ~50%.
**Action:** Always exclude non-source metadata directories from Prettier scans via `.prettierignore` to maintain fast development cycles.
