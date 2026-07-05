[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-07-05 - [Prettier Performance Optimization]
**Learning:** Prettier was scanning the `.git/` directory and `.jules/` journal files, which are metadata and not subject to standard formatting rules. This added unnecessary overhead to the formatting checks.
**Action:** Implemented a root-level `.prettierignore` to bypass these directories, improving toolchain performance.
