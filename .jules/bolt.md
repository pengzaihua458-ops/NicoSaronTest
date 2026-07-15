# [🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal - Performance Optimizations

## 2026-07-15 - Optimizing Toolchain with .prettierignore
**Learning:** In documentation-centric repositories, Prettier can still incur overhead by scanning internal journals and large hidden directories like `.git`. Additionally, internal journals often contain specific formatting that may trigger unnecessary warnings.
**Action:** Implement a root-level `.prettierignore` to exclude `.jules/`, `.git/`, and common build/dependency patterns. This optimizes check time and suppresses noise.
