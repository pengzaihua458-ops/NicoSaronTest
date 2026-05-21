# Bolt Journal - Critical Learnings

## 2026-05-18 - Baseline
**Learning:** In sparse repositories without a manifest, Prettier's scan time is dominated by directory traversal and overhead. Excluding the `.jules/` metadata directory and `.git/` can reduce this overhead.
**Action:** Implement `.prettierignore` to exclude non-essential directories from formatting checks.

## 2026-05-18 - Optimization Results
**Learning:** Excluding the `.jules/` directory in this sparse state reduced Prettier check time by ~5% (0.63s -> 0.60s). While modest, this prevents performance degradation as the `.jules/` directory grows with more agent metadata.
**Action:** Always exclude internal metadata directories from linting/formatting tools.
