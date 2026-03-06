# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-03-06 - [Supply Chain Hardening]
**Vulnerability:** Default dependency management lacks explicit protections against unauthorized post-install scripts and may not enforce high security standards.
**Learning:** Hardening `package.json` with `onlyBuiltDependencies` and `.npmrc` with `audit-level` prevents malicious scripts and ensures security focus.
**Prevention:** Enforce `pnpm.onlyBuiltDependencies: []` and `audit-level=high` in the project's foundational configuration.
