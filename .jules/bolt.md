# Bolt Journal

## 2026-04-24 - [Refining Prettier Performance]
**Learning:** In a sparse repository focused on documentation, the primary performance bottleneck in the developer loop is often the linting and formatting of non-essential metadata or journal files. Excluding the `.jules/` directory from Prettier checks provides a measurable speedup for formatting tasks.
**Action:** Implement `.prettierignore` to exclude the `.jules/` directory.
