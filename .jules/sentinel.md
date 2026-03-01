# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-03-01 - [Supply Chain Hardening]
**Vulnerability:** Default package manager configurations may allow untrusted dependencies to execute arbitrary build scripts during installation, potentially leading to remote code execution.
**Learning:** Restricting build script execution to a known allowlist (or blocking them entirely by default) is a critical defense-in-depth measure.
**Prevention:** Configure `pnpm.onlyBuiltDependencies: []` in `package.json` to block all lifecycle scripts unless explicitly authorized.
