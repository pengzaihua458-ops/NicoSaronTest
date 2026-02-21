# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-21 - [Supply Chain Hardening]
**Vulnerability:** Default package manager behavior allows unverified lifecycle scripts to execute, posing a supply chain risk.
**Learning:** Hardening the foundation with `onlyBuiltDependencies` and strict engine checks creates a "secure by default" environment.
**Prevention:** Always explicitly define allowed build dependencies and enforce high audit levels in `.npmrc`.
