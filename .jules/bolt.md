[🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md) [⚡ Bolt Journal](bolt.md)

# Bolt Journal

## 2026-04-16 - [Optimization: Tool Discovery via .prettierignore]
**Learning:** Excluding metadata directories like `.jules/` and `node_modules/` in `.prettierignore` stabilizes tool execution times and prevents unnecessary formatting warnings in sparse branches.
**Action:** Always implement `.prettierignore` when metadata directories are present to ensure clean and fast developer tooling output.
