# Bolt Journal

[🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | [🛡️ Sentinel](sentinel.md)

## 2026-06-19 - [Toolchain Performance in Sparse Repositories]
**Learning:** In sparse repositories with heavy metadata or documentation directories (like `.jules/`), tools like Prettier can suffer a 200x performance penalty (from ~0.8s to ~162s) if those directories are not explicitly ignored.
**Action:** Always implement a root-level `.prettierignore` to exclude metadata and non-code directories to maintain a high-performance toolchain.
