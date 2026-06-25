[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-06-25 - Toolchain Performance Bottleneck
**Learning:** In repositories with non-source metadata directories like `.jules/`, tools like Prettier can suffer significant performance degradation if these directories are not explicitly ignored. Profiling showed that adding 5MB of metadata can increase check times from <1s to >5s.
**Action:** Always implement a root-level `.prettierignore` to exclude non-source directories and maintain toolchain efficiency as the repository grows.
