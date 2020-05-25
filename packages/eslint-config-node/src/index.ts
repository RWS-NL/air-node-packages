/**
 * Default ESLint configuration for RWS-NL projects
 * @example
 * ```json
 * {
 *   "extends": "@rws-air/eslint-config-node"
 * }
 * ```
 */
export const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    jsx: true,
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: { jsx: false }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
    commonjs: true
  },
  rules: {
    // TypeScript
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/naming-convention': ['error', { selector: 'interface', format: ['PascalCase'] }],
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'off',
      { 'ts-expect-error': false, 'ts-ignore': false, 'ts-nocheck': false, 'ts-check': true }
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',

    // Best Practices
    eqeqeq: ['error', 'smart'],
    'no-else-return': 'warn',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-return-assign': 'error',
    'no-sequences': 'error',
    yoda: 'error',

    // ECMAScript 6
    'no-duplicate-imports': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error'
  }
};

module.exports = config;
export default config;
