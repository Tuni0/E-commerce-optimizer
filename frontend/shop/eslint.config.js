import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.jsx"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // Fixowalne
      "no-unused-vars": "warn",
      "import/no-duplicates": "warn",
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
        },
      ],

      // React
      "react/react-in-jsx-scope": "off", // Vite/React 18 nie wymaga React w imporcie
      "react/prop-types": "off",

      // JSX A11y
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
    },
  },
];
