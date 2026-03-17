## 2026-03-17 - [Optimizing Tool Discovery via .prettierignore]
**Learning:** Even in a minimal repository, excluding non-code directories (like `.jules/`) and large generated files (like `pnpm-lock.yaml`) from Prettier scans reduces tool discovery overhead and prevents noise from unformatted documentation logs. This establishes a "Speed First" foundation that maintains performance as the repository grows.
**Action:** Always implement a `.prettierignore` file early in a project's lifecycle to bound tool discovery and maintain sub-second linting/formatting cycles.
