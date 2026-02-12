# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-02-10 - [Hardening Repository Foundation with Secure Node.js Defaults]
**Vulnerability:** A lack of explicit security configurations in Node.js projects can lead to the use of vulnerable Node versions and un-audited dependencies.
**Learning:** Foundation-level security should include not only documentation but also enforcement of secure environment defaults like strict engine versions and mandatory security audits.
**Prevention:** Implement `package.json` with secure `engines` and `private` flags, and `.npmrc` to enforce `engine-strict` and high audit levels.

## 2026-02-12 - [Enforcing Supply Chain and Script Execution Security]
**Vulnerability:** Default package manager behaviors can allow non-deterministic dependency updates and automatic execution of potentially malicious scripts from dependencies.
**Learning:** Enforcing exact versions with `save-exact=true` and controlling script execution with `onlyBuiltDependencies` (now the default in pnpm 10) significantly reduces the attack surface.
**Prevention:** Configure `.npmrc` to enforce exact versions and use `onlyBuiltDependencies` in `package.json` to whitelist trusted scripts.
