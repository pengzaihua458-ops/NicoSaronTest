# Bolt Journal

## 2026-06-12 - [Optimized toolchain performance with .prettierignore]
**Learning:** In documentation-heavy or sparse repositories, toolchain utilities like Prettier can experience significant slowdowns (e.g., 6s for 5MB of metadata) if they scan directories containing large files or non-code artifacts.
**Action:** Always implement a root-level `.prettierignore` (and similar ignore files for other tools) to explicitly exclude metadata directories like `.jules/`, `node_modules/`, and build artifacts, ensuring sub-second execution for warm checks.
