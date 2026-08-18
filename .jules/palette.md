[🛡️ Security](../SECURITY.md) | 🎨 Palette (palette.md) | [🛡️ Security](sentinel.md)

## 2026-08-18 - Reducing Reporting Friction in Documentation-Only Repositories

**Learning:** In repositories without interactive application interfaces or web UI components, vulnerability report submission in `SECURITY.md` is the primary human interface. Standard plain mailto links require users to manually write boilerplate report structure, raising friction and leading to missing essential diagnostic details (e.g., impact, reproduction steps).

**Action:** Streamline vulnerability reporting UX by providing structured `mailto:` URLs with pre-filled `subject` and `body` parameters alongside a copy-paste fallback template block.
