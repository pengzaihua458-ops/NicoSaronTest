# Bolt's Journal - Performance Optimizations

## 2026-05-17 - [Initializing Bolt Journal]
**Learning:** In sparse repositories with only documentation, performance optimizations often focus on the development workflow and tooling efficiency.
**Action:** Always check for missing tool configurations (like `.prettierignore` or `.prettiercache`) that can speed up CI/CD or local development cycles.

## 2026-05-17 - [Optimizing Prettier performance in sparse repositories]
**Learning:** Even in small repositories, Prettier scans can be optimized by excluding directories that don't require strict formatting (like agent journals) and enabling caching.
**Action:** Implement `.prettierignore` for `.jules/` and ensure `.gitignore` handles `.prettiercache` to facilitate faster incremental checks.
