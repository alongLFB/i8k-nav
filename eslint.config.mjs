import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "import/no-anonymous-default-export": "warn",
      "@next/next/no-img-element": "warn",
    },
  },
  {
    ignores: ["drizzle/**", "scripts/**", "public/**"],
  },
];

export default config;
