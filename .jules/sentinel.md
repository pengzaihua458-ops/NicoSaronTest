# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]

**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-03-31 - [Secret Leakage Prevention via .gitignore Hardening]

**Vulnerability:** The existing `.gitignore` was missing several common patterns for sensitive files (certificates, infrastructure states, and specialized credential files), creating a risk of accidental secret exposure.
**Learning:** Default or basic `.gitignore` templates often omit cloud-specific or certificate-related extensions that are frequently targeted in credential harvesting attacks.
**Prevention:** Maintain a comprehensive, security-hardened `.gitignore` that includes patterns for `*.crt`, `*.p12`, `*.pfx`, `*.csr`, `*.der`, `*.credentials`, `*.secret`, `*.password`, `.env.vault`, and `*.tfstate*`.
