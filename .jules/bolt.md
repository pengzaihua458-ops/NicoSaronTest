# Bolt Journal

## 2026-03-31 - [Tool Discovery Optimization]
**Learning:** In sparse repositories with metadata and potential lock files, `prettier --check .` scans everything. Excluding `.jules/` and `.git/` via `.prettierignore` reduced check time from ~0.615s to ~0.278s (approx. 54% improvement) and eliminated formatting warnings for metadata.
**Action:** Always implement a robust `.prettierignore` early in project development to minimize tool discovery overhead and prevent non-critical formatting failures.
