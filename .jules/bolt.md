# Bolt Journal

## 2026-06-14 - [Initial Performance Profiling]
**Learning:** Large Markdown files in metadata directories scanned by Prettier can cause significant performance degradation (multi-second slowdown) in toolchain checks, even in sparse repositories.
**Action:** Implement a root-level `.prettierignore` to explicitly exclude metadata and non-code directories, ensuring sub-second formatting checks.
