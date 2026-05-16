# NicoSaronTest

**🏠 Home** | [🛡️ Security](SECURITY.md) | [⚡ Bolt](.jules/bolt.md) | [🛡️ Sentinel](.jules/sentinel.md)

Welcome to the project! This is a sparse repository focused on establishing a secure and performant foundation.

## Performance & Tooling

To maintain high development velocity, we optimize our tooling for sparse environments.

### Prettier Optimization

We use `.prettierignore` to exclude growing metadata directories (like `.jules/`) from being scanned. This reduces formatting check times by over 70% in this repository.

To run Prettier with caching enabled:

```bash
prettier --write . --cache --cache-location .prettiercache
```

The `.prettiercache` is excluded from version control via `.gitignore`.
