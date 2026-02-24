# Bolt Journal

## 2026-02-24 - [Optimize tool performance by ignoring non-code directories]

**Learning:** Tool discovery processes for ESLint and Vitest can be slowed down by scanning non-code directories like `.jules/`. Explicitly ignoring these directories in tool configurations reduces the overhead of file listing, parsing, and test collection.

**Action:** Updated `eslint.config.js` with global `ignores` and created `vitest.config.js` with `test.exclude` for `.jules/`.

**Impact:** Reduced Vitest "collect" time by ~50% (from 43ms to 23ms) for a single additional test file in the ignored directory. Prevents performance degradation as documentation and journals grow.
