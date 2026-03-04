import globals from "globals";

export default [
  {
    ignores: [".jules/**", ".eslintcache", "node_modules/**", "pnpm-lock.yaml"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
];
