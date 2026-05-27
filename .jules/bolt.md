# [🏠 Home](../README.md) | [🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | **⚡ Bolt** | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-05-27 - [Structural Optimization: .prettierignore]
**Learning:** In manifest-less repositories, structural optimizations like `.prettierignore` are more portable and reliable performance wins compared to environment-specific `.prettiercache` files.
**Action:** Always exclude non-source directories (like `.jules/`) from tool scans to ensure performance scales as metadata grows.
