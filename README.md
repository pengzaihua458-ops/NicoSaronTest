# nicosarontest

Foundational repository for security and documentation best practices.

## Security First

This project is built with security as a core principle. We use automated auditing, strict engine enforcement, and supply chain hardening.

### Security Features

- **Supply Chain Hardening**: Only approved built dependencies are allowed to run lifecycle scripts.
- **Node.js Enforcement**: Minimum Node.js version is enforced via `engines` and `.npmrc`.
- **Automated Auditing**: High-level security audits are integrated into the workflow.

## Getting Started

```bash
pnpm install
pnpm audit
pnpm test
pnpm lint
```

## Reporting Vulnerabilities

Please see [SECURITY.md](SECURITY.md) for instructions on how to report security vulnerabilities.
