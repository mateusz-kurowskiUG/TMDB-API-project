import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintTanstack from "@tanstack/eslint-plugin-query";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// todo: add ally
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config(eslintPluginNext.configs.recommended),
  eslintConfigPrettier,
  ...compat.config(eslintTanstack.configs.recommended),
];

export default eslintConfig;
