[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-07-13 - [Optimize Prettier performance via .prettierignore]
**Learning:** Prettier scans all directories by default, including internal journals in `.jules/` and system files in `.git/`. This adds unnecessary overhead and generates noisy formatting warnings for files that don't require standardized formatting.
**Action:** Implement a root-level `.prettierignore` to exclude these paths, reducing scan time and silencing irrelevant warnings.
