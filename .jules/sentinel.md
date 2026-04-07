# Sentinel Journal

[🏠 Home](../README.md) [🛡️ Security](../SECURITY.md) [📓 Sentinel Journal](sentinel.md)

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-04-07 - [Credential Leak Prevention via .gitignore Hardening]

**Vulnerability:** Default `.gitignore` templates often omit cloud-specific vault files (`.env.vault`), infrastructure state files (`*.tfstate`), and common certificate extensions (`*.p12`, `*.pfx`).
**Learning:** Proactive hardening of the repository root against credential harvesting is a critical first-line defense in depth.
**Prevention:** Maintain a standardized security-hardened `.gitignore` that explicitly includes patterns for cloud secrets, certificates, and infrastructure states across all projects.
