# Performance Foundation

![Security First](https://img.shields.io/badge/Security-First-blue.svg)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A foundational repository for security and performance best practices.

## 🛡️ Security First

Security is a core principle of this project. We implement multiple layers of protection:

- **Supply Chain Hardening**: We block unauthorized lifecycle scripts using `pnpm.onlyBuiltDependencies`.
- **Environment Enforcement**: We strictly enforce modern Node.js versions (>=20.0.0).
- **Automated Auditing**: Integrated security auditing via `pnpm audit`.

## 🔗 Quick Links

- [🛡️ Security Policy](SECURITY.md)
- [📓 Sentinel Journal](.jules/sentinel.md)

## 🛠️ Development

```bash
pnpm install
pnpm lint
pnpm test
pnpm audit
```
