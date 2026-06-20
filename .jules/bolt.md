# Bolt Journal

[🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | [🛡️ Sentinel](sentinel.md)

## 2026-06-20 - [Performance Recovery in Sparse Repositories]

**Learning:** In sparse repositories with heavy metadata or documentation directories like `.jules/`, toolchain operations (e.g., Prettier) can suffer significant performance degradation if these directories are not explicitly ignored. A 5MB metadata file can increase Prettier check times by ~400%.
**Action:** Implement and maintain a root-level `.prettierignore` file to exclude non-code and metadata directories from toolchain scans.
