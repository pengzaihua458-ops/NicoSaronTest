# Sentinel Journal

## 2026-05-01 - [Foundational Security Hardening]
**Vulnerability:** The repository lacked supply chain protections and robust baseline security configurations to prevent accidental data leaks.
**Learning:** Establishing `onlyBuiltDependencies` in `package.json` is a critical first step for `pnpm` projects to prevent malicious postinstall scripts.
**Prevention:** Always initialize new repositories with hardened `.gitignore` patterns and supply chain protections.
