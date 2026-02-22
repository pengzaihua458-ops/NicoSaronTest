# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-19 - [Supply Chain Hardening]
**Vulnerability:** The repository lacked enforcement of secure dependency lifecycle scripts and Node.js versions, exposing it to potential supply chain attacks.
**Learning:** `pnpm.onlyBuiltDependencies: []` is a powerful tool to block untrusted scripts during installation.
**Prevention:** Always initialize foundational repositories with strict engine enforcement and blocked built dependencies.
