# ⚡ Bolt Journal

[🏠 Home](../README.md) [🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md) [🎨 Palette Journal](palette.md) [⚡ Bolt Journal](bolt.md)

## 2026-04-13 - [Tooling Optimization]
**Learning:** In sparse repositories with significant documentation and agent metadata, tools like Prettier can incur discovery overhead and produce formatting warnings for non-source files. Explicitly excluding these directories in `.prettierignore` stabilizes linting output and optimizes tool discovery.
**Action:** Always implement `.prettierignore` to exclude metadata directories like `.jules/` and `node_modules/` to ensure clean and efficient developer tooling.
