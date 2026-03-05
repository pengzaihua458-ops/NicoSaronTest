# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-03-05 - [Supply Chain Hardening]
**Vulnerability:** The project had no restrictions on third-party install scripts, making it vulnerable to supply chain attacks where compromised dependencies execute malicious code during installation.
**Learning:** Modern package managers like pnpm provide granular control over built dependencies, which should be disabled by default to maintain a minimal attack surface.
**Prevention:** Configure `pnpm.onlyBuiltDependencies: []` in `package.json` and enforce it with automated tests.
