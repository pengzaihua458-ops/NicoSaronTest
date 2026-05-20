## 2026-05-18 - Optimizing developer workflow in sparse repositories
**Learning:** In repositories where documentation and agent metadata (like `.jules/`) form the bulk of the content, Prettier scan times can be optimized by excluding non-essential directories via `.prettierignore`. This prevents linting noise from agent journals and speeds up the feedback loop for contributors.
**Action:** Always check for growing metadata or journal directories and exclude them from formatting tools if they don't require strict style enforcement.
