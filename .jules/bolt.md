# Bolt Journal - Critical Performance Learnings

[🛡️ Security](SECURITY.md) | [🎨 Palette](.jules/palette.md) | **[⚡ Bolt](.jules/bolt.md)** | [🛡️ Sentinel](.jules/sentinel.md)

---

## 2026-06-14 - [Toolchain Performance Hardening]
**Learning:** In documentation-heavy or manifest-less repositories, tools like Prettier scan all directories by default. Large metadata files (e.g., 5MB journals) can cause a 10x slowdown in CI/CD pipeline checks if not explicitly ignored.
**Action:** Always implement a root-level `.prettierignore` to exclude metadata directories and standard non-code paths to maintain sub-second toolchain performance.
