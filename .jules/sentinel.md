# Sentinel Journal

## 2026-02-08 - [Initial Security Hardening]
**Vulnerability:** The repository was found to be empty, lacking baseline security documentation and protection against accidental leaks of sensitive files.
**Learning:** Even an empty repository can benefit from immediate security posture improvements.
**Prevention:** Establish a secure foundation by adding `SECURITY.md` and `.gitignore` as early as possible.

## 2026-05-08 - [Infrastructure Scope Constraints]
**Vulnerability:** Attempting to bundle infrastructure restoration (e.g., creating `package.json` and `pnpm-lock.yaml`) with security documentation.
**Learning:** Security agents should focus on high-impact security configurations and documentation. Bundling major infrastructure changes leads to scope creep and PR rejection.
**Prevention:** Keep security hardening PRs focused on specific defensive measures (like `.gitignore` and `SECURITY.md`) and keep changes under 50 lines.
