# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-06-23 - [Expanded Git Exclusion]

**Vulnerability:** Default `.gitignore` lacked coverage for common secret-bearing extensions like `.env.vault`, `*.credentials`, and infrastructure state files, increasing risk of credential exposure.
**Learning:** Standard `.gitignore` templates often omit cloud-native and framework-specific secret files.
**Prevention:** Proactively exclude environment vaults, generic credential patterns, and infrastructure state files (`.tfstate`) to harden the repository against accidental leaks.
