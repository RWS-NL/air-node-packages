# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@4.0.2...@rws-air/jestscreenshot@4.0.3) (2020-03-24)

**Note:** Version bump only for package @rws-air/jestscreenshot





## [4.0.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@4.0.1...@rws-air/jestscreenshot@4.0.2) (2020-03-18)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [4.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@4.0.0...@rws-air/jestscreenshot@4.0.1) (2020-03-17)

**Note:** Version bump only for package @rws-air/jestscreenshot

# [4.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.7...@rws-air/jestscreenshot@4.0.0) (2020-01-17)

### Feat

- Webcomponents & Eslint Config reworks ([#211](https://github.com/RWS-NL/air-node-packages/issues/211)) ([d04aaf5](https://github.com/RWS-NL/air-node-packages/commit/d04aaf50a4bbead1e6d6af3c629b888cd1da976b)), closes [#168897109](https://github.com/RWS-NL/air-node-packages/issues/168897109)

### BREAKING CHANGES

- disabledBackdropClick and disabledEscapeKeyDown are removed from Modal and ConfirmationModal. Please remove them from your code.
- Linting configuration has completely changed. Dependencies have changed (no more peer dependencies) and much less is linted. We recommend using Prettier for your code formatting.

Signed-off-by: Kevin Hendriks <kevin.hendriks@cgi.com>

Co-authored-by: Kevin Hendriks <40209176+hendrikskevin@users.noreply.github.com>

## [3.0.7](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.6...@rws-air/jestscreenshot@3.0.7) (2020-01-09)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [3.0.6](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.5...@rws-air/jestscreenshot@3.0.6) (2019-11-25)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [3.0.5](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.4...@rws-air/jestscreenshot@3.0.5) (2019-11-06)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [3.0.4](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.3...@rws-air/jestscreenshot@3.0.4) (2019-11-01)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [3.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.2...@rws-air/jestscreenshot@3.0.3) (2019-10-08)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [3.0.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.1...@rws-air/jestscreenshot@3.0.2) (2019-09-19)

**Note:** Version bump only for package @rws-air/jestscreenshot

## [3.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.0...@rws-air/jestscreenshot@3.0.1) (2019-09-09)

**Note:** Version bump only for package @rws-air/jestscreenshot

# [3.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@2.0.3...@rws-air/jestscreenshot@3.0.0) (2019-08-15)

### Bug Fixes

- upgrade eslint-config to fully support [@typescript-eslint](https://github.com/typescript-eslint) v2.x ([0fee61f](https://github.com/RWS-NL/air-node-packages/commit/0fee61f))
- **webcomponents:** fix prepublish script ([7b38cf1](https://github.com/RWS-NL/air-node-packages/commit/7b38cf1))

### BREAKING CHANGES

- tsconfig.eslint.json is now required in the root of the folder due to breaking
  changes made by typescript-eslint

## [2.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@2.0.2...@rws-air/jestscreenshot@2.0.3) (2019-08-14)

**Note:** Version bump only for package @rws-air/jestscreenshot

## 2.0.2 (2019-08-14)

### Features

- **jestscreenshot:** Create jestscreenshot ([807b4dd](https://github.com/RWS-NL/air-node-packages/commit/807b4dd))

### Reverts

- revert lerna not being in independent mode ([d1072b8](https://github.com/RWS-NL/air-node-packages/commit/d1072b8))

## 2.0.1 (2019-08-14)

### Features

- **jestscreenshot:** Create jestscreenshot ([807b4dd](https://github.com/RWS-NL/air-node-packages/commit/807b4dd))

### 2.0.0 (2019-08-13)

#### Changes

- BREAKING: Completely rewrote the structure of the library, it now requires jest-circus and custom jest-environment-puppeteer environment setup!
  - This is because the previous solution was simply not reliable

### 1.1.2 (2019-08-13)

#### Changes

- Package json refactoring

### 1.1.1 (2019-08-13)

#### Adds

- This changelog

### 1.1.0 (2019-08-12)

#### Adds

- Support for uploading screenshots to Slack!

Provide a `slackToken` (or env var of `SLACK_WEBTOKEN`), `slackChannels` and set `slackUpload` to true and watch your screenshots magically upload to Slack!

### 1.0.1 (2019-08-09)

#### Fixes

- Fixed the URL to the README

### 1.0.0 (2019-08-09)

- Initial release
