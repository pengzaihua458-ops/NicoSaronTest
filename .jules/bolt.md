# ⚡ Bolt Performance Journal

This journal records critical performance learnings for the NicoSaronTest repository.

## 2026-05-23 - Prettier Optimization via .prettierignore
**Learning:** Excluding metadata directories like `.jules/` from Prettier scans prevents tool overhead from scaling with the amount of project metadata. In this sparse state, it already reduced check times by ~19%.
**Action:** Always maintain `.prettierignore` to keep developer workflows and CI/CD pipelines lean as project documentation and metadata grow.
