import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  // recomended
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // basic
  {
    ignores: [
      "../dist/**",
      "**/node_modules/**",
      "**/*.d.ts",
      "**/*.js"
    ]
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
      // Always use double quotes.
      quotes: ["error", "double"],

      // Always require semicolons.
      semi: ["error", "always"],

      // Maximum line length.
      "max-len": [
        "error",
        {
          code: 120,
        },
      ],

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
    }
  },
];
