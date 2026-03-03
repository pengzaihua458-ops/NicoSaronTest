# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-03-03 - [Supply Chain Hardening]
**Vulnerability:** Default dependency installation allows arbitrary execution of third-party build scripts, posing a supply chain risk.
**Learning:** Enforcing `onlyBuiltDependencies: []` provides a critical layer of defense-in-depth by blocking unauthorized post-install scripts.
**Prevention:** Combine strict engine enforcement with locked-down build script execution for a secure-by-default environment.
