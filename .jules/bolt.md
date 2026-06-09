## 2026-06-09 - Large Metadata Performance Bottleneck
**Learning:** Large Markdown files in the `.jules/` directory can cause Prettier to crash with a "Maximum call stack size exceeded" error or slow down check times by over 400x (from <1s to >4m).
**Action:** Always implement a root-level `.prettierignore` that excludes metadata directories like `.jules/` and other non-source directories to maintain sub-second toolchain performance.
