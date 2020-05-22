import {} from '@typescript-eslint/parser';
export const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: { jsx: true }
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
    commonjs: true
  },
  rules: {
    // Disable some rules
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'off',
      { 'ts-expect-error': false, 'ts-ignore': false, 'ts-nocheck': false, 'ts-check': true }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};

module.exports = config;
exports.default = config;
export default config;
