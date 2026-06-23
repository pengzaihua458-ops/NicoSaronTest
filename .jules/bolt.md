[🛡️ Security](../SECURITY.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-06-23 - [Toolchain Performance Optimization]
**Learning:** Prettier can suffer significant performance penalties when processing large metadata or documentation files in directories like `.jules/`. In this repository, a 5MB bloat file increased check time from ~0.8s to ~8s (a 10x slowdown).
**Action:** Always implement a `.prettierignore` file to exclude non-code metadata directories from the toolchain path.
