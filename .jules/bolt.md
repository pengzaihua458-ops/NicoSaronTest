# Bolt Journal

[🏠 Home](../README.md) | [🛡️ Security](../SECURITY.md) | **⚡ Bolt** | [🛡️ Sentinel](sentinel.md)

## 2026-05-15 - [Optimizing Prettier in Sparse Repositories]
**Learning:** In sparse repositories without a `package.json`, Prettier scans the entire directory tree by default. As metadata directories like `.jules/` grow with agent journals, this leads to increasing overhead and slower check times.
**Action:** Always create a `.prettierignore` file to exclude growing metadata directories and use `--cache` with an explicit `.prettiercache` to ensure consistent, fast formatting checks.
