# ⚡ Bolt Journal

## 2026-05-04 - Prettier Discovery Optimization
**Learning:** In sparse repositories with heavy documentation in `.jules/`, excluding these directories from Prettier via `.prettierignore` measurably reduces I/O overhead and avoids unnecessary formatting checks on agent journals.
**Action:** Always implement `.prettierignore` to skip non-code and documentation-only directories.
