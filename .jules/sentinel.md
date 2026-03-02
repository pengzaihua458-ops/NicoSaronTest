# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-03-02 - [Supply Chain Hardening]
**Vulnerability:** Default Node.js environments lack strict version enforcement and supply chain protections against malicious postinstall scripts.
**Learning:** Foundational repositories must explicitly block unauthorized scripts and enforce strict engine versions to prevent RCE and environment mismatch issues.
**Prevention:** Configure `pnpm.onlyBuiltDependencies: []` in `package.json` and set `engine-strict=true` in `.npmrc`.
