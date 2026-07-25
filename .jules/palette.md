[🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | [🛡️ Sentinel](sentinel.md)

# Palette Journal

## 2026-07-25 - [Vulnerability Reporting UX]

**Learning:** In documentation-only repositories, the "user interface" is the documentation itself. Users reporting a security vulnerability face a high interaction cost when they have to manually draft a structured report. Providing a pre-filled structured mailto link reduces this friction dramatically, but a copy-paste fallback block is crucial for clients or systems where mailto URLs are parsed incorrectly or unsupported.
**Action:** Always provide a dual approach in SECURITY.md: a highly interactive pre-filled mailto link for seamless creation, accompanied by a clear, pre-formatted Markdown fallback block for manual copy-pasting.
