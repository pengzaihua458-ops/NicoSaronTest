[🛡️ Security](../SECURITY.md) | [🎨 Palette](palette.md) | [🛡️ Sentinel](sentinel.md)

# Palette Journal

## 2026-07-22 - Reducing Interaction Cost in Documentation-Only Repositories

**Learning:** In a repository containing only documentation, the user interface consists entirely of Markdown documents. The primary UX metric is the interaction cost of critical tasks, such as reporting vulnerabilities. Standard mailto links require users to manually write out structured report fields, whereas a pre-filled, templated mailto link reduces cognitive load and guarantees that all required details are captured in a single transaction.
**Action:** When designing security reporting or feedback flows in static documents, always use highly-structured mailto links with clear templates and fallback manual instructions to optimize the information architecture and minimize friction.
