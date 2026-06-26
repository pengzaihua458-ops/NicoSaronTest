[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-06-26 - [Toolchain Overhead in Sparse Repository]
**Learning:** In a repository with very few source files, the overhead of scanning non-source directories like `.jules/` and `.git/` can dominate the execution time of tools like Prettier. Even with just a few small files, `pnpm dlx prettier --check .` took over 5 seconds.
**Action:** Implement a root-level `.prettierignore` to explicitly skip these directories, ensuring that performance remains high as the repository grows or if large metadata files are added.
