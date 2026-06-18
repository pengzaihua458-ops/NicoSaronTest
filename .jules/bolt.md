[🛡️ Security](../SECURITY.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-06-18 - Toolchain Optimization in Sparse Repositories
**Learning:** In repositories with significant documentation or metadata (like the `.jules/` directory) but little to no application code, toolchain performance can be disproportionately affected by large non-code files if they aren't explicitly ignored.
**Action:** Always implement a `.prettierignore` file early to prevent performance degradation as metadata grows.
