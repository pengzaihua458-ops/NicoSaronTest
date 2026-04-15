# ⚡ Bolt Journal

[🏠 Home](../README.md) [🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md) [🎨 Palette Journal](palette.md) [⚡ Bolt Journal](bolt.md)

## 2026-04-15 - [Initial Tooling Optimization]
**Learning:** Tool discovery overhead in sparse environments can be reduced by explicitly ignoring non-source directories in linter/formatter configurations.
**Action:** Always implement `.prettierignore` (and similar) to exclude metadata and dependency directories to stabilize tool execution times.
