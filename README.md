# NicoSaronTest

This is a test repository with security-hardened foundational configurations.

## Security

We take the security of this project seriously. For information on how to report a vulnerability or our disclosure policy, please see our [Security Policy](SECURITY.md).

## Getting Started

Currently, this repository contains baseline security configurations for a Node.js project using pnpm.

### Security Best Practices

- **Never commit secrets**: Use environment variables and the provided `.gitignore` to keep sensitive data out of the repository.
- **Run Audits**: Regularly run `pnpm audit` to check for dependency vulnerabilities.
- **Strict Engines**: This project enforces a minimum Node.js version for security and compatibility.
- **Exact Versions**: We enforce exact dependency versions in `.npmrc` to ensure reproducible and audited builds, preventing accidental upgrades to malicious versions.
- **Script Execution Control**: Lifecycle scripts (e.g., `postinstall`) from dependencies are restricted via `onlyBuiltDependencies` in `package.json` to prevent supply chain attacks. This is the default behavior in pnpm 10+.

## Contributing

Please ensure that you do not commit any sensitive information such as API keys, passwords, or credentials. A comprehensive `.gitignore` is provided to help prevent accidental leakage.
