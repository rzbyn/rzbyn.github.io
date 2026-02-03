import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        jsx: true,
      },
    },
    rules: {
      semi: ["error", "always"],
      "eol-last": ["error", "always"],
      quotes: [
        "error",
        "single",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "no-trailing-spaces": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "line-comment-position": ["error", { position: "above" }],
      "react/display-name": "off",
      "react/jsx-key": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default eslintConfig;
