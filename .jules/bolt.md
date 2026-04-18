[🏠 Home](../README.md) [🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md) [🎨 Palette Journal](palette.md) [⚡ Bolt Journal](bolt.md)

# Bolt Journal

## 2026-04-18 - [Tooling Optimization: Prettier Ignore]
**Learning:** Running `prettier` checks across the entire repository includes non-code directories like `.jules/` and metadata directories like `.git/`, which can introduce unnecessary overhead and noise (e.g., formatting warnings for documentation journals).
**Action:** Implement a `.prettierignore` file to exclude non-essential directories, improving check speed and reducing noise.
