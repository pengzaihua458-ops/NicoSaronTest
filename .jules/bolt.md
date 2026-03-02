## 2026-03-02 - [Optimize tool discovery by ignoring non-code directories]
**Learning:** Formatting tool execution times can be significantly degraded as non-code documentation directories (like `.jules/`) grow. Proactively excluding these directories from the tools' discovery phase maintains performance regardless of repository size.
**Action:** Always exclude non-code documentation directories from tool discovery configurations (e.g., via `.prettierignore`) to prevent performance degradation as the repository grows.

**Performance Impact (Measured with 50 dummy files):**
- **Without `.prettierignore`:** ~0.50s
- **With `.prettierignore`:** ~0.21s
- **Improvement:** ~58% reduction in execution time.
