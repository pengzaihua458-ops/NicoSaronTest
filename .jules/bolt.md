# Bolt Journal

## 2026-06-15 - [Toolchain Slowdown in Documentation-Heavy Repos]
**Learning:** In repositories dominated by metadata and documentation (like .jules/), toolchain commands such as Prettier scan all files by default, causing significant performance degradation (e.g., ~5.4s for minimal content) which scales poorly as metadata grows.
**Action:** Always implement a root-level `.prettierignore` to explicitly exclude metadata directories and non-code assets in documentation-driven or sparse repositories.
