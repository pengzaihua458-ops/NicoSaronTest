# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-13 - [Hardening Repository Foundation with Secure Package Management]
**Vulnerability:** Default package manager behaviors can allow non-deterministic dependency updates and automatic execution of potentially malicious scripts from dependencies.
**Learning:** Enforcing exact versions, strict engines, and controlling script execution with `onlyBuiltDependencies` significantly reduces the attack surface.
**Prevention:** Configure `.npmrc` to enforce secure defaults and use `onlyBuiltDependencies` in `package.json` to whitelist trusted scripts.
