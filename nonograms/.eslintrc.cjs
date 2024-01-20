module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "import/no-unresolved": ["warn"],
    "import/no-absolute-path": "off",
    "semi": "error"
  },
};
