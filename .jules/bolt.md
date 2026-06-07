# Bolt Journal

## 2026-06-06 - [Initial Performance Baseline]
**Learning:** In a manifest-less repository, toolchain performance (like Prettier) can degrade significantly as metadata or documentation grows in the `.jules/` directory if not explicitly ignored. A 5MB file in `.jules/` increased Prettier check time from ~0.8s to ~6s.
**Action:** Implement `.prettierignore` to exclude metadata directories and maintain sub-second check times.
