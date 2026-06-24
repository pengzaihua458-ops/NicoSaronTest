# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-06-24 - [Advanced .gitignore Hardening]

**Vulnerability:** Incomplete `.gitignore` patterns left the repository vulnerable to accidental commits of sensitive metadata like Terraform state, infrastructure secrets, and cryptographic certificates.
**Learning:** Standard `.gitignore` templates often overlook environment-specific secrets like `.env.vault` or infrastructure-as-code state files.
**Prevention:** Implement a defense-in-depth approach to `.gitignore` by explicitly blocking high-risk file extensions (`.tfstate`, `.p12`, `.crt`) and generic secret naming conventions (`*.secret`, `*.password`).
