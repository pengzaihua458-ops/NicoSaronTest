## 2025-03-07 - Optimize tool discovery by excluding non-code assets
**Learning:** Large auto-generated files like `pnpm-lock.yaml` (1200+ lines) and documentation directories like `.jules/` significantly slow down Prettier's discovery and parsing phase, even when they are already formatted.
**Action:** Always include a `.prettierignore` file in the repository root to exclude these assets, ensuring formatting checks focus only on relevant source code.
