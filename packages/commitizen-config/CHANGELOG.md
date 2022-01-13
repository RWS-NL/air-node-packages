# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.5](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@3.0.4...@rws-air/commitizen-config@3.0.5) (2022-01-13)

**Note:** Version bump only for package @rws-air/commitizen-config





## [3.0.4](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@3.0.3...@rws-air/commitizen-config@3.0.4) (2022-01-06)

**Note:** Version bump only for package @rws-air/commitizen-config





## [3.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@3.0.2...@rws-air/commitizen-config@3.0.3) (2021-07-09)

**Note:** Version bump only for package @rws-air/commitizen-config





## [3.0.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@3.0.1...@rws-air/commitizen-config@3.0.2) (2021-04-21)

**Note:** Version bump only for package @rws-air/commitizen-config





## [3.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@3.0.0...@rws-air/commitizen-config@3.0.1) (2021-02-22)

**Note:** Version bump only for package @rws-air/commitizen-config





# [3.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@2.0.5...@rws-air/commitizen-config@3.0.0) (2021-02-05)


### Features

* upgrade to react 17. ([#824](https://github.com/RWS-NL/air-node-packages/issues/824)) ([15b0db0](https://github.com/RWS-NL/air-node-packages/commit/15b0db0870307f43d4c9d8d1975a919955b087f1))


### BREAKING CHANGES

* enzyme tight code in utils like `findShallowByDataQa`, `findByDataQa` and  `findReactByDataQa` is removed.
This tiny piece of code needs to be implemented in the application itself if still needed.

[AIRIVT-1604]

* fix: linting errors which are normal since we want to export this way.





## [2.0.5](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@2.0.4...@rws-air/commitizen-config@2.0.5) (2020-08-10)

**Note:** Version bump only for package @rws-air/commitizen-config





## [2.0.4](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@2.0.3...@rws-air/commitizen-config@2.0.4) (2020-06-22)

**Note:** Version bump only for package @rws-air/commitizen-config





## [2.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@2.0.2...@rws-air/commitizen-config@2.0.3) (2020-06-22)


### Bug Fixes

* add commitlint/load as dependency ([82f0d9e](https://github.com/RWS-NL/air-node-packages/commit/82f0d9e5f481a839cd35590ba5a632f4731d283a))





## [2.0.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@2.0.1...@rws-air/commitizen-config@2.0.2) (2020-06-11)

**Note:** Version bump only for package @rws-air/commitizen-config





## [2.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@2.0.0...@rws-air/commitizen-config@2.0.1) (2020-05-22)

**Note:** Version bump only for package @rws-air/commitizen-config





# [2.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@1.2.0-alpha.1...@rws-air/commitizen-config@2.0.0) (2020-05-18)


### Features

* add eslint-config-node and ts-config packages ([db093ba](https://github.com/RWS-NL/air-node-packages/commit/db093ba39bab3c6b97a689017b9a7f41d6422fde))


### BREAKING CHANGES

* FuseJS now returns data for their fuzzy searches
differently. Before the data would be directly on the result, now you'll
need to access it on the "items" property. This affects all queries for
this API that return `[JSONObject!]!` as type.





# [1.2.0-alpha.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@1.2.0-alpha.0...@rws-air/commitizen-config@1.2.0-alpha.1) (2020-05-11)

**Note:** Version bump only for package @rws-air/commitizen-config





# [1.2.0-alpha.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@1.1.3...@rws-air/commitizen-config@1.2.0-alpha.0) (2020-05-11)

**Note:** Version bump only for package @rws-air/commitizen-config





## [1.1.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@1.1.2...@rws-air/commitizen-config@1.1.3) (2020-05-06)

**Note:** Version bump only for package @rws-air/commitizen-config





## [1.1.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@1.1.1...@rws-air/commitizen-config@1.1.2) (2020-04-10)

**Note:** Version bump only for package @rws-air/commitizen-config

## [1.1.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/commitizen-config@1.1.0...@rws-air/commitizen-config@1.1.1) (2020-04-01)

**Note:** Version bump only for package @rws-air/commitizen-config

# 1.1.0 (2020-03-24)

### Features

- **commitizen-config,commitlint-config:** add these 2 new packages ([16013ae](https://github.com/RWS-NL/air-node-packages/commit/16013aefedc5a20c5a0fa0a77ca11ce232b980ad))
