# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-22 - [Supply Chain Hardening]
**Vulnerability:** Default package manager configurations allow arbitrary lifecycle scripts, posing a supply chain risk.
**Learning:** Hardening the package manager configuration at the project level prevents malicious dependencies from executing code during installation.
**Prevention:** Use `pnpm.onlyBuiltDependencies: []` in `package.json` and set `audit-level=high` in `.npmrc`.
