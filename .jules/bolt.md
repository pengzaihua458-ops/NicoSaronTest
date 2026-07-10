[🛡️ Security](../SECURITY.md) | [⚡ Bolt](bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-07-09 - [Prettier Performance Optimization]
**Learning:** Prettier scans the entire project directory by default, including internal journals and large metadata directories like `.git`, which can increase toolchain latency even in small repositories.
**Action:** Implement a `.prettierignore` file to explicitly exclude non-source directories, ensuring faster linting and formatting cycles.
