# Bolt Journal

## 2026-04-25 - [Prettier Performance Optimization]
**Learning:** Excluding documentation-heavy directories like `.jules/` via `.prettierignore` significantly reduces formatting check execution time (from ~5.6s to ~0.96s, an ~83% boost) and eliminates noise from agent journals.
**Action:** Always implement `.prettierignore` in sparse repositories to focus formatting tools on core source code and artifacts.
