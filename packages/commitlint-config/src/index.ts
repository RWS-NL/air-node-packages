/**
 * The configuration to be used by commitlint
 */
export const config = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'header-full-stop': [2, 'never', '.'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // For commits that change the build configuration
        'chore', // For chore commits that do not change code or documentation
        'ci', // For commits that change the CI/CD flow
        'dependencies', // For commits that change or upgrade dependencies
        'docs', // For commits that change documentation
        'feat', // For commits that add new features
        'fix', // For commits that fix bugs
        'misc', // For commits that do not match any of the other types
        'refactor', // For commits that refactor existing code
        'revert', // For commits that revert previous commits
        'style', // For commits that exclusively change the style of the code, such as indents, linting, and auto-formatting
        'test', // For commits that change test code
        'wip' // For commits that add work-in-progress code, should never be used on the master branch but can be used on non-master branches
      ]
    ]
  }
};

module.exports = config;
exports.default = config;
export default config;
