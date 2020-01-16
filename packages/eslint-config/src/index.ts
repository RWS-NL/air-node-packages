export const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {jsx: true},
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app'
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
    commonjs: true,
  },
  rules: {

    // Disable some rules
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};

module.exports = config;
exports.default = config;
export default config;