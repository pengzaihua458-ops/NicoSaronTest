[🛡️ Security](../SECURITY.md) | [🛡️ Sentinel](sentinel.md)

# Bolt's Journal ⚡

## Philosophy
- Speed is a feature
- Every millisecond counts
- Measure first, optimize second
- Don't sacrifice readability for micro-optimizations

## 2026-06-21 - [Initial Toolchain Optimization]
**Learning:** In sparse repositories with heavy metadata or documentation directories like `.jules/`, tools like Prettier can suffer significant performance penalties if these directories are not explicitly ignored.
**Action:** Always implement a root-level `.prettierignore` to exclude non-code and metadata directories to maintain a fast toolchain.
