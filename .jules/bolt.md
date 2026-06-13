# Bolt Journal

## 2026-06-12 - [Large Metadata Toolchain Slowdown]
**Learning:** In documentation-heavy or manifest-less repositories, large Markdown files in metadata directories (like `.jules/`) can cause extreme toolchain performance degradation. Specifically, a 5MB Markdown file caused Prettier check times to increase from ~0.8s to over 400s (timeout), effectively paralyzing the development workflow.
**Action:** Always implement a root-level `.prettierignore` to explicitly exclude non-code metadata directories and large static assets to maintain sub-second toolchain performance.
