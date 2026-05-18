# Bolt Journal

## 2026-05-18 - [Prettier Caching Pitfalls]
**Learning:** Prettier cache files (`.prettiercache`) contain environment-specific absolute paths and timestamps. Committing them to the repository causes bloat and merge conflicts without providing cross-environment performance gains. Additionally, in repositories without a `package.json`, caching only benefits successive local runs if the flag is manually provided.
**Action:** Always exclude `.prettiercache` from version control via `.gitignore`. Focus on structural optimizations like `.prettierignore` to exclude non-essential directories (e.g., `.jules/`) which provides a consistent ~15-20% speedup in sparse repositories.
