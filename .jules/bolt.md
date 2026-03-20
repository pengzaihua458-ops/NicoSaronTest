## 2026-03-20 - [Prettier Tool Discovery Optimization]
**Learning:** Even in minimal repositories, tool discovery overhead for non-code directories like `.jules/` can be avoided to maintain peak performance and prevent unnecessary linting of documentation logs.
**Action:** Proactively exclude `.jules/` and `node_modules/` in `.prettierignore` to ensure fast developer feedback loops.
