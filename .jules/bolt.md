[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## Philosophy

- Speed is a feature
- Every millisecond counts
- Measure first, optimize second
- Don't sacrifice readability for micro-optimizations

## 2026-07-01 - [Prettier Path Optimization]

**Learning:** Even in small repositories, Prettier scans the `.git` directory by default if no ignore file is present. While the performance gain is small on tiny repos, it scales exponentially with repository size and history.
**Action:** Always implement `.prettierignore` to exclude metadata and build artifacts from the toolchain path.
