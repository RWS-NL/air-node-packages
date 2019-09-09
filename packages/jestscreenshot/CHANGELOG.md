# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@3.0.0...@rws-air/jestscreenshot@3.0.1) (2019-09-09)

**Note:** Version bump only for package @rws-air/jestscreenshot





# [3.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@2.0.3...@rws-air/jestscreenshot@3.0.0) (2019-08-15)


### Bug Fixes

* upgrade eslint-config to fully support [@typescript-eslint](https://github.com/typescript-eslint) v2.x ([0fee61f](https://github.com/RWS-NL/air-node-packages/commit/0fee61f))
* **webcomponents:** fix prepublish script ([7b38cf1](https://github.com/RWS-NL/air-node-packages/commit/7b38cf1))


### BREAKING CHANGES

* tsconfig.eslint.json is now required in the root of the folder due to breaking
changes made by typescript-eslint





## [2.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/jestscreenshot@2.0.2...@rws-air/jestscreenshot@2.0.3) (2019-08-14)

**Note:** Version bump only for package @rws-air/jestscreenshot





## 2.0.2 (2019-08-14)


### Features

* **jestscreenshot:** Create jestscreenshot ([807b4dd](https://github.com/RWS-NL/air-node-packages/commit/807b4dd))


### Reverts

* revert lerna not being in independent mode ([d1072b8](https://github.com/RWS-NL/air-node-packages/commit/d1072b8))





## 2.0.1 (2019-08-14)


### Features

* **jestscreenshot:** Create jestscreenshot ([807b4dd](https://github.com/RWS-NL/air-node-packages/commit/807b4dd))

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
