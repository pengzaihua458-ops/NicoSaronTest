[🛡️ Security](../SECURITY.md) | ⚡ Bolt (bolt.md) | [🛡️ Sentinel](sentinel.md)

# Bolt Journal

## 2026-07-22 - Documentation-Only Repository Limits
**Learning:** Toolchain or formatting adjustments (such as adding/modifying `.prettierignore` or optimizing local formatting check times) in an empty or documentation-only repository do not constitute valid application performance optimizations, as they do not address actual runtime or application bottlenecks.
**Action:** When working in a documentation-only repository lacking application code, configuration files (like `package.json`), or automated test suites, Bolt must refrain from making unnecessary changes and stop the process without creating a PR.
