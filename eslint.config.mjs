import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add this object to override/disable rules globally
  {
    rules: {
      'react/no-unescaped-entities': 'off', // Example: Disable unescaped entities in JSX
      '@next/next/no-img-element': 'off',   // Example: Allow <img> elements
      // Add more here, e.g.:
      // '@next/next/no-sync-scripts': 'off',
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;