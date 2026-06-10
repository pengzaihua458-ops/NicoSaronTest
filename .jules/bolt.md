# Bolt Journal

## 2026-06-09 - [Toolchain Performance Hardening]
**Learning:** Large Markdown files in agent-monitored directories (like `.jules/`) can cause a 400x slowdown in Prettier check times (from ~0.8s to >4m) or even tool crashes. In sparse repositories where documentation serves as the primary interface, the toolchain must be explicitly scoped to maintain developer velocity.
**Action:** Implement a root-level `.prettierignore` to explicitly exclude metadata directories like `.jules/` and standard build/log paths to ensure sub-second toolchain performance.
