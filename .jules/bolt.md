# Bolt Journal

## 2026-02-22 - [Optimize linting and formatting performance]

**Learning:** Enabling caching for ESLint and Prettier significantly reduces execution time by skipping unchanged files. This is especially effective when combined with a `.prettierignore` that excludes large auto-generated files like `pnpm-lock.yaml`.

**Action:** Added `--cache` flag to `lint` and `format` scripts in `package.json`. Updated `.gitignore` to exclude cache files.

**Impact:** Reduced `pnpm format` execution time from ~0.84s to ~0.66s (~21% speedup) on a minimal codebase. The impact will scale with project size.
