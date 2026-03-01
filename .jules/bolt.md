## 2026-03-01 - [Optimize tool discovery by ignoring non-code directories]
**Learning:** Formatting tool execution times can be significantly degraded as non-code documentation directories (like `.jules/`) grow. Proactively excluding these directories from the tools' discovery phase maintains performance regardless of repository size.
**Action:** Always exclude non-code documentation directories from tool discovery configurations (e.g., via `.prettierignore`) to prevent performance degradation as the repository grows.
