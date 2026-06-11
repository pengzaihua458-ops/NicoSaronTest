# Bolt Journal

## 2026-06-11 - [Toolchain Performance in Documentation-Heavy Repositories]
**Learning:** In repositories where metadata or documentation dominates (like `.jules/`), toolchains like Prettier can suffer massive performance degradation (up to 400x) if they attempt to scan large binary or unstructured files incorrectly.
**Action:** Always implement a root-level `.prettierignore` to exclude metadata and build directories, ensuring toolchain responsiveness remains under 1 second.
