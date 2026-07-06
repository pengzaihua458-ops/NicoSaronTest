[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## Performance Philosophy
- Speed is a feature
- Every millisecond counts
- Measure first, optimize second
- Don't sacrifice readability for micro-optimizations

## 2026-07-06 - [Prettier Performance Optimization]
**Learning:** Even in small repositories, Prettier scans the entire project including metadata directories like `.git` and internal documentation in `.jules/`. While the absolute time is small, ignoring these can reduce the relative overhead significantly.
**Action:** Always implement a root-level `.prettierignore` to exclude non-source files and metadata.
