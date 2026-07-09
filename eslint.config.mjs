import next from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "backup/**"],
  },
  ...next,
];

export default eslintConfig;
