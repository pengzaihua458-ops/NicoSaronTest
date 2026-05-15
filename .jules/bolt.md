# ⚡ Bolt's Journal - Performance Learnings

## 2026-05-15 - Optimizing Prettier for Sparse Repositories
**Learning:** In sparse repositories, the overhead of scanning non-source directories like `.jules/` significantly slows down formatting checks. By implementing `.prettierignore` to skip these directories, Prettier scan time was reduced from ~5.6s to ~1.0s.
**Action:** Always implement `.prettierignore` to exclude metadata directories and ensure `.prettiercache` is ignored in `.gitignore`.
