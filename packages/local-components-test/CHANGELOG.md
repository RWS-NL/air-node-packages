# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.5](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@3.1.4...@rws-air/local-components-test@3.1.5) (2020-05-06)

**Note:** Version bump only for package @rws-air/local-components-test





## [3.1.4](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@3.1.3...@rws-air/local-components-test@3.1.4) (2020-04-01)

**Note:** Version bump only for package @rws-air/local-components-test

## [3.1.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@3.1.2...@rws-air/local-components-test@3.1.3) (2020-03-24)

**Note:** Version bump only for package @rws-air/local-components-test

## [3.1.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@3.1.1...@rws-air/local-components-test@3.1.2) (2020-03-18)

**Note:** Version bump only for package @rws-air/local-components-test

## [3.1.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@3.1.0...@rws-air/local-components-test@3.1.1) (2020-02-14)

**Note:** Version bump only for package @rws-air/local-components-test

# [3.1.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@3.0.0...@rws-air/local-components-test@3.1.0) (2020-01-17)

### Features

- rework webcomponents ([#224](https://github.com/RWS-NL/air-node-packages/issues/224)) ([297420d](https://github.com/RWS-NL/air-node-packages/commit/297420d7eba99d106c0a1ba50f243a31f9120be9))

# [3.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/local-components-test@2.0.0...@rws-air/local-components-test@3.0.0) (2020-01-17)

### Feat

- Webcomponents & Eslint Config reworks ([#211](https://github.com/RWS-NL/air-node-packages/issues/211)) ([d04aaf5](https://github.com/RWS-NL/air-node-packages/commit/d04aaf50a4bbead1e6d6af3c629b888cd1da976b)), closes [#168897109](https://github.com/RWS-NL/air-node-packages/issues/168897109)

### Features

- **webcomponents:** add a Floating Action Button component ([#212](https://github.com/RWS-NL/air-node-packages/issues/212)) ([d5a21c4](https://github.com/RWS-NL/air-node-packages/commit/d5a21c4d384de7ea6ecc9554026773611566969c)), closes [#168897109](https://github.com/RWS-NL/air-node-packages/issues/168897109)

### BREAKING CHANGES

- disabledBackdropClick and disabledEscapeKeyDown are removed from Modal and ConfirmationModal. Please remove them from your code.
- Linting configuration has completely changed. Dependencies have changed (no more peer dependencies) and much less is linted. We recommend using Prettier for your code formatting.

Signed-off-by: Kevin Hendriks <kevin.hendriks@cgi.com>

Co-authored-by: Kevin Hendriks <40209176+hendrikskevin@users.noreply.github.com>

# 2.0.0 (2020-01-09)

### Bug Fixes

- upgrade eslint-config to fully support [@typescript-eslint](https://github.com/typescript-eslint) v2.x ([0fee61f](https://github.com/RWS-NL/air-node-packages/commit/0fee61ff50eacfa1692f90c16719e775c4e07665))
- **eslint-config:** disable jest rule that we don't need ([f21be02](https://github.com/RWS-NL/air-node-packages/commit/f21be022b1f2dbd454bca94e356271ceb4d7c827))
- **webcomponents->dropdownbutton:** fixed sizing across screens ([abf1c8c](https://github.com/RWS-NL/air-node-packages/commit/abf1c8cd218df1b7f60cb8ba4a0961a239321a1a))
- **webcomponents->dropdownbutton:** properly apply rws style for disable ([b459865](https://github.com/RWS-NL/air-node-packages/commit/b459865eb25c8af6c3b818f069cfdb795b949325))

### Features

- **eslint-config:** change preferred type definition to interface ([74ab971](https://github.com/RWS-NL/air-node-packages/commit/74ab971a31055a51adea7729eaa3ddfd4d74c4bb))
- **stylelint-config:** set default severity to Error by default ([fb8a073](https://github.com/RWS-NL/air-node-packages/commit/fb8a073d5b7cbebafaf50de502bc88a3826c5116))

### BREAKING CHANGES

- tsconfig.eslint.json is now required in the root of the folder due to breaking
  changes made by typescript-eslint

## [1.2.12](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.11...local-components-test@1.2.12) (2019-12-18)

**Note:** Version bump only for package local-components-test

## [1.2.11](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.10...local-components-test@1.2.11) (2019-11-28)

**Note:** Version bump only for package local-components-test

## [1.2.10](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.9...local-components-test@1.2.10) (2019-11-25)

**Note:** Version bump only for package local-components-test

## [1.2.9](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.8...local-components-test@1.2.9) (2019-11-12)

**Note:** Version bump only for package local-components-test

## [1.2.8](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.7...local-components-test@1.2.8) (2019-11-08)

### Bug Fixes

- **webcomponents->dropdownbutton:** properly apply rws style for disable ([b459865](https://github.com/RWS-NL/air-node-packages/commit/b459865eb25c8af6c3b818f069cfdb795b949325))

## [1.2.7](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.6...local-components-test@1.2.7) (2019-11-06)

**Note:** Version bump only for package local-components-test

## [1.2.6](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.5...local-components-test@1.2.6) (2019-11-01)

### Bug Fixes

- **webcomponents->dropdownbutton:** fixed sizing across screens ([abf1c8c](https://github.com/RWS-NL/air-node-packages/commit/abf1c8cd218df1b7f60cb8ba4a0961a239321a1a))

## [1.2.5](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.4...local-components-test@1.2.5) (2019-10-31)

**Note:** Version bump only for package local-components-test

## [1.2.4](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.3...local-components-test@1.2.4) (2019-10-18)

**Note:** Version bump only for package local-components-test

## [1.2.3](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.2...local-components-test@1.2.3) (2019-10-08)

**Note:** Version bump only for package local-components-test

## [1.2.2](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.1...local-components-test@1.2.2) (2019-10-08)

**Note:** Version bump only for package local-components-test

## [1.2.1](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.2.0...local-components-test@1.2.1) (2019-10-03)

**Note:** Version bump only for package local-components-test

# [1.2.0](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.1.3...local-components-test@1.2.0) (2019-09-19)

### Features

- **eslint-config:** change preferred type definition to interface ([74ab971](https://github.com/RWS-NL/air-node-packages/commit/74ab971))

## [1.1.3](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.1.2...local-components-test@1.1.3) (2019-09-03)

### Bug Fixes

- **eslint-config:** disable jest rule that we don't need ([f21be02](https://github.com/RWS-NL/air-node-packages/commit/f21be02))

## [1.1.2](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.1.1...local-components-test@1.1.2) (2019-08-28)

**Note:** Version bump only for package local-components-test

## [1.1.1](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.1.0...local-components-test@1.1.1) (2019-08-20)

**Note:** Version bump only for package local-components-test

# [1.1.0](https://github.com/RWS-NL/air-node-packages/compare/local-components-test@1.0.0...local-components-test@1.1.0) (2019-08-19)

### Features

- **stylelint-config:** set default severity to Error by default ([fb8a073](https://github.com/RWS-NL/air-node-packages/commit/fb8a073))

# 1.0.0 (2019-08-15)

### Bug Fixes

- upgrade eslint-config to fully support [@typescript-eslint](https://github.com/typescript-eslint) v2.x ([0fee61f](https://github.com/RWS-NL/air-node-packages/commit/0fee61f))

### BREAKING CHANGES

- tsconfig.eslint.json is now required in the root of the folder due to breaking
  changes made by typescript-eslint
