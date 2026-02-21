# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-18 - [Supply Chain and Foundation Hardening]

**Vulnerability:** Potential for supply chain attacks via malicious lifecycle scripts in dependencies.
**Learning:** Using `pnpm.onlyBuiltDependencies: []` effectively blocks all unauthorized scripts by default, providing a strong layer of defense.
**Prevention:** Always default to blocking built dependencies and selectively whitelist only known-safe ones.
