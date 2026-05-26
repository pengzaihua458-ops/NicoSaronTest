[🏠 Home](../README.md) | [🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | **⚡ Bolt** | [🛡️ Sentinel](sentinel.md)

# ⚡ Bolt - Performance Journal

## 2026-05-26 - Optimized Prettier via Structural Exclusion
**Learning:** In manifest-less repositories, Prettier scan times can degrade significantly as metadata or journals grow. Excluding the `.jules/` directory via `.prettierignore` provides a ~94% performance improvement (from ~3.6s to ~0.2s) when 5MB of metadata is present.
**Action:** Always implement `.prettierignore` for metadata directories to ensure developer workflow efficiency scales with project growth.
