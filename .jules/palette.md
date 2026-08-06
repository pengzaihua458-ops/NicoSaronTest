# [🛡️ Security](../SECURITY.md) | [🛡️ Sentinel](sentinel.md) | 🎨 Palette (palette.md)

# Palette Journal

## 2026-08-06 - [Reducing Interaction Cost for Security Reports]

**Learning:** When reporting security vulnerabilities, users face a high cognitive and interaction load. Providing a pre-filled, structured mailto link reduces reporting friction and ensures that crucial information (type, severity, steps to reproduce, impact) is supplied immediately, without discouraging the reporter.
**Action:** Always include a structured mailto link with pre-filled subject and body parameters, alongside a copy-paste fallback block for users whose mail clients do not support mailto query parameters.
