# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-17 - [Hardening Repository Foundation and Automated Auditing]
**Vulnerability:** Lack of supply chain protections and automated security auditing in the project foundation.
**Learning:** Disabling arbitrary lifecycle scripts in `package.json` and enforcing strict engine checks in `.npmrc` significantly reduces the attack surface for supply chain attacks.
**Prevention:** Always initialize projects with `pnpm.onlyBuiltDependencies: []` and automated `pnpm audit` in CI.
