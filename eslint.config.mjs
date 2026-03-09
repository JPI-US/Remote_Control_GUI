import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTailwind from "eslint-plugin-tailwindcss";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1️⃣ Basic JS rules for browser files
  { 
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: { ...globals.browser, ...globals.node } } 
  },

  // 2️⃣ React, Tailwind, and Prettier rules
  {
    ...pluginReact.configs.flat.recommended,
    plugins: { tailwindcss: pluginTailwind, prettier: pluginPrettier },
    extends: ["plugin:tailwindcss/recommended", "plugin:prettier/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js no longer requires React import
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
      "tailwindcss/classnames-order": "warn",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "no-console": "warn",
      "no-unused-vars": ["warn"]
    },
    settings: {
      react: { version: "detect" } // Automatically detect React version
    },
    files: ["**/*.{js,jsx,ts,tsx}"]
  }
]);