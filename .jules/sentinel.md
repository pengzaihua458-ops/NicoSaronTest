# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-24 - [Supply Chain Hardening]
**Vulnerability:** Dependencies can execute arbitrary code during installation via lifecycle scripts (e.g., postinstall), creating a supply chain risk.
**Learning:** pnpm can be configured to block all built dependencies by default, requiring explicit opt-in for necessary scripts.
**Prevention:** Use `pnpm.onlyBuiltDependencies: []` in `package.json` to enforce a secure-by-default installation process.
