# ⚡ Bolt Journal

[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

## Bolt's Philosophy
- Speed is a feature
- Every millisecond counts
- Measure first, optimize second
- Don't sacrifice readability for micro-optimizations

## 2026-06-30 - [Prettier Path Optimization]
**Learning:** Prettier scans all directories by default, including high-churn or large metadata directories like `.jules/` and `.git/`, which can significantly slow down linting in sparse repositories.
**Action:** Always maintain a `.prettierignore` file to exclude non-source directories. Implementing `.prettierignore` reduced Prettier check time by ~33% (from ~0.3s to ~0.2s) even in a sparse environment.
