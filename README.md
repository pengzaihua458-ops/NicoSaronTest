# Performance Foundation

A foundation repository with a focus on performance and security best practices.

## Core Principles

- **Security First**: Every change is evaluated for its security impact. We enforce strict runtime version checks and supply chain protections.
- **Accessibility is Not Optional**: We build for everyone, ensuring our documentation and tools are accessible.
- **Speed as a Feature**: Performance is a first-class citizen, from the tools we use to the code we write.

## Security Features

- **Node.js Version Enforcement**: Requires Node.js >=20.0.0, as specified in `package.json` and enforced by `.npmrc`.
- **Supply Chain Hardening**: We block potentially malicious lifecycle scripts during installation by configuring `pnpm.onlyBuiltDependencies: []`.
- **Automated Security Audits**: High-level security audits are integrated into our workflow.

## Getting Started

```bash
pnpm install
pnpm test
pnpm lint
```

## Security Reporting

Please refer to [SECURITY.md](SECURITY.md) for instructions on how to report vulnerabilities.
