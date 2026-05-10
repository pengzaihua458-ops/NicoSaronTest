# Bolt Journal

## 2026-05-08 - [Prettier Performance Optimization]
**Learning:** Excluding non-source directories like `.jules/` from Prettier scans and enabling caching significantly reduces I/O overhead and tool execution time, especially as journal files grow.
**Action:** Always implement `.prettierignore` for metadata/journal directories and add tool caches to `.gitignore` to maintain developer velocity.
