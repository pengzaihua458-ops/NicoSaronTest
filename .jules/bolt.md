## 2026-03-03 - [Optimize tool performance by ignoring non-code directories]
**Learning:** Proactively excluding non-code documentation directories (like `.jules/`) and large auto-generated files (like `pnpm-lock.yaml`) from formatting and linting tool discovery phases maintains performance as the repository grows. Additionally, enabling repository tracking for tool caches encourages local performance gains.
**Action:** Use `.prettierignore` and update `.gitignore` to exclude large/unnecessary files from tool scans and manage tool caches.

**Expected Impact:**
- Reduces Prettier/ESLint discovery phase execution time.
- Prevents performance degradation as documentation and dependency lockfiles grow.
- Encourages the use of local caching for sub-second subsequent linting/formatting runs.
