[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal ⚡

Speed is a feature. Every millisecond counts. Measure first, optimize second. Don't sacrifice readability for micro-optimizations.

## 2026-06-28 - [Toolchain Optimization]

**Learning:** Tools like Prettier can suffer performance penalties in repositories if heavy metadata or documentation directories like `.jules/` or `.git/` are not explicitly ignored. While initial runs may be slow due to package downloads (~5.3s), subsequent check times are reduced and stabilized (~0.8s) by explicitly ignoring non-source paths.
**Action:** Always implement a `.prettierignore` file to exclude non-source directories from toolchain scans.
