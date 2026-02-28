## 2026-02-28 - [Optimize tool discovery by ignoring non-code directories]
**Learning:** Formatting and testing tool execution times can be significantly degraded as non-code documentation directories (like `.jules/`) grow. Proactively excluding these directories from the tools' discovery phase maintains performance regardless of repository size.
**Action:** Created `.prettierignore` and `vitest.config.js` to explicitly exclude `.jules/` from scan and collection processes.
