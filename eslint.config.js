import js from "@eslint/js";
export default [
  {
    ignores: [".jules/**", ".eslintcache", ".prettier-cache"],
  },
  js.configs.recommended,
];
