## 2026-02-27 - [Optimize Prettier performance]
**Learning:** Prettier scans all files in the directory by default. In repositories with large lockfiles or many non-code files (like those in `.jules/`), resolving configuration and scanning these files adds significant overhead even if they aren't formatted.
**Action:** Added `.prettierignore` to skip `pnpm-lock.yaml` and `.jules/` directory.
