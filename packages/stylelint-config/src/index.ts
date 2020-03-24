export const config = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss'],
  rules: {
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'color-named': 'never',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'function-calc-no-invalid': true,
    'max-nesting-depth': [3, { ignoreAtRules: ['each', 'media', 'supports', 'include'] }],
    'no-invalid-double-slash-comments': null,
    'number-max-precision': 2,
    'property-no-unknown': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'always',
    'scss/at-mixin-pattern': '^[a-z](?:[A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])?[A-Za-z0-9]*$',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[a-z](?:[A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])?[A-Za-z0-9]*$',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/percent-placeholder-pattern':
      '^[a-z](?:[A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])?[A-Za-z0-9]*$',
    'selector-class-pattern': '^[a-z](?:[A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])?[A-Za-z0-9]*$',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line'
  }
};

module.exports = config;
exports.default = config;
export default config;
