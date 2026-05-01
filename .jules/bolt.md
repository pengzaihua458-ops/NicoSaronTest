## 2026-05-01 - Optimize tool discovery and linting performance
**Learning:** In sparse repositories, lack of tool caching and exclusion of non-code directories leads to redundant file system crawling and re-processing, which scales poorly as the project grows. Adhering to the Groundedness Rule in documentation prevents UX friction from broken links.
**Action:** Always implement Prettier caching via the `--cache` flag and maintain a robust `.prettierignore` file to optimize discovery performance. Ensure all documentation links are grounded.
