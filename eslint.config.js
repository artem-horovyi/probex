import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  // recomended
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // basic
  {
    ignores: ["../dist/**", "**/node_modules/**", "**/*.d.ts", "**/*.js"],
  },

  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Imports settings
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal"],
            ["parent", "sibling", "index"],
          ],

          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
