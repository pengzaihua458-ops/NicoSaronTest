# Bolt's Journal

## 2026-04-26 - [Prettier Performance Optimization]
**Learning:** In sparse repositories where agent journals (.jules/) are the primary documentation, linting and formatting checks can be unnecessarily slowed down by scanning these non-code directories.
**Action:** Always implement a `.prettierignore` to exclude documentation-heavy directories like `.jules/` when they aren't the target of the formatting task, resulting in a measurable performance boost (approx. 9-10% in this case).
