[🏠 Home](../README.md) | [🛡️ Security](../SECURITY.md) | **⚡ Bolt** | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-05-31 - [Optimizing Toolchain Scalability with .prettierignore]
**Learning:** In sparse repositories with growing metadata directories (like `.jules/`), tools like Prettier can suffer significant performance degradation (~10x slowdown) if they attempt to scan large non-source files.
**Action:** Always implement a hardened `.prettierignore` to exclude metadata and build directories, ensuring toolchain performance remains constant even as internal logs or documentation accumulate.
