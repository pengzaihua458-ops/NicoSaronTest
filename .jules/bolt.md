## 2026-03-21 - [Optimize tool discovery performance]
**Learning:** In sparse documentation-only branches, Prettier still scans all directories (like `.jules/`) and large generated files, which can cause both performance overhead and unnecessary linting failures for non-standard Markdown.
**Action:** Always implement a `.prettierignore` file to exclude non-source directories and known large artifacts (like lockfiles) to optimize tool discovery and ensure stable linting.
