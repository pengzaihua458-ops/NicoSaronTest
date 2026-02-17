# nicosarontest

A foundational repository for demonstrating security best practices in a Node.js project.

[![Security Audit](https://github.com/nicosaron/nicosarontest/actions/workflows/security-audit.yml/badge.svg)](https://github.com/nicosaron/nicosarontest/actions/workflows/security-audit.yml)

## Security First

This project is built with a security-first mindset:

- **Node.js Environment:** Enforces Node.js version >=20.0.0 for the latest security patches.
- **Supply Chain Security:** Blocks untrusted lifecycle scripts from dependencies using `pnpm.onlyBuiltDependencies`.
- **Automated Auditing:** Every push and pull request is automatically audited for known vulnerabilities.
- **Strict Engine Checks:** Enforced via `.npmrc` to ensure development environment consistency.

## Quick Links

- [Security Policy](./SECURITY.md)
- [Sentinel Journal](./.jules/sentinel.md)

## Development

```bash
# Install dependencies
pnpm install

# Run security audit
pnpm audit

# Lint and Format
pnpm lint
pnpm format

# Run tests
pnpm test
```
