# Bolt ⚡

[🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | [🛡️ Sentinel](sentinel.md)

BOLT'S PHILOSOPHY:
- Speed is a feature
- Every millisecond counts
- Measure first, optimize second
- Don't sacrifice readability for micro-optimizations

## 2026-06-21 - Prettier performance optimization
**Learning:** Toolchain performance in documentation-heavy repositories is disproportionately affected by non-code metadata (like .jules/) if not explicitly ignored. 5MB of metadata can cause a >400s timeout.
**Action:** Always implement a root-level .prettierignore to exclude metadata directories and maintain sub-second check times.
