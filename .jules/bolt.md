# Bolt Journal

## 2026-05-14 - [Prettier Performance in Sparse Repositories]
**Learning:** In sparse repositories, Prettier's scan time is dominated by recursive directory traversal. Excluding the `.jules/` directory (which contains ever-growing agent journals) from Prettier via `.prettierignore` prevents performance degradation as more tasks are completed.
**Action:** Always exclude non-source, metadata-heavy directories like `.jules/` from linting and formatting tools to maintain fast feedback loops.
