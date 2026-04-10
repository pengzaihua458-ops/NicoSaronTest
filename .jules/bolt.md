# Bolt Journal

[🏠 Home](../README.md) [🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md) [🎨 Palette Journal](palette.md)

## 2026-04-10 - [Optimizing Tool Discovery]
**Learning:** In sparse repositories with minimal files, tool discovery overhead from metadata directories like `.jules/` and large machine-generated files can be a significant bottleneck for linting/formatting.
**Action:** Implement `.prettierignore` early to explicitly exclude these directories and stabilize tool execution times.
