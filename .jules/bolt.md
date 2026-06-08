# Bolt Journal

## 2026-06-08 - [Toolchain Performance Hardening]
**Learning:** In sparse repositories or those with large metadata/documentation directories (like `.jules/`), toolchains like Prettier can experience significant slowdowns (e.g., from ~0.8s to >4s with a 5MB file) if they scan non-source directories.
**Action:** Always implement a hardened `.prettierignore` that explicitly excludes metadata, logs, and dependency directories to maintain sub-second performance.
