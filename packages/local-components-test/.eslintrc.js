"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
};
module.exports = exports.config;
exports.default = exports.config;
exports.default = exports.config;
//# sourceMappingURL=index.js.map