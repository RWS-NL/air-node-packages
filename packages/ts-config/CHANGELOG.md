# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.7](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/ts-config@1.0.6...@rws-air/ts-config@1.0.7) (2022-01-13)

**Note:** Version bump only for package @rws-air/ts-config





## [1.0.6](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/ts-config@1.0.5...@rws-air/ts-config@1.0.6) (2022-01-13)

**Note:** Version bump only for package @rws-air/ts-config





## [1.0.5](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/ts-config@1.0.4...@rws-air/ts-config@1.0.5) (2022-01-06)

**Note:** Version bump only for package @rws-air/ts-config





## [1.0.4](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/ts-config@1.0.3...@rws-air/ts-config@1.0.4) (2020-11-16)

**Note:** Version bump only for package @rws-air/ts-config





## [1.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/ts-config@1.0.1...@rws-air/ts-config@1.0.3) (2020-11-16)

**Note:** Version bump only for package @rws-air/ts-config





## [1.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/ts-config@1.0.0...@rws-air/ts-config@1.0.1) (2020-11-16)


### Bug Fixes

* remove eslint packages ([c9c6a32](https://github.com/RWS-NL/air-node-packages/commit/c9c6a326fbdf3beb5fd716667a283023af8a08db))





# 1.0.0 (2020-05-18)


### Features

* add eslint-config-node and ts-config packages ([db093ba](https://github.com/RWS-NL/air-node-packages/commit/db093ba39bab3c6b97a689017b9a7f41d6422fde))


### BREAKING CHANGES

* FuseJS now returns data for their fuzzy searches
differently. Before the data would be directly on the result, now you'll
need to access it on the "items" property. This affects all queries for
this API that return `[JSONObject!]!` as type.





# [2.0.0](https://github.com/favware/node-packages/compare/@favware/ts-config@2.0.0-canary.1...@favware/ts-config@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/ts-config





# [2.0.0-canary.1](https://github.com/favware/node-packages/compare/@favware/ts-config@2.0.0-canary.0...@favware/ts-config@2.0.0-canary.1) (2020-05-06)


### Bug Fixes

* **ts-config:** fix publish of tsconfig ([9c48933](https://github.com/favware/node-packages/commit/9c48933a131852c2354ac699e2378d93f35adbee))





# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/ts-config@1.1.3...@favware/ts-config@2.0.0-canary.0) (2020-05-06)


### Bug Fixes

* reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))


### BREAKING CHANGES

* The default target for ts-config and these packages is now CommonJS, which will
work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
hidden required dependency.





## [1.1.3](https://github.com/favware/node-packages/compare/@favware/ts-config@1.1.2...@favware/ts-config@1.1.3) (2020-04-01)

**Note:** Version bump only for package @favware/ts-config

## [1.1.2](https://github.com/favware/node-packages/compare/@favware/ts-config@1.1.1...@favware/ts-config@1.1.2) (2020-01-22)

**Note:** Version bump only for package @favware/ts-config

## [1.1.1](https://github.com/favware/node-packages/compare/@favware/ts-config@1.1.0...@favware/ts-config@1.1.1) (2019-11-25)

### Bug Fixes

- **ts-config:** fixed target by setting it to supported type ([387c875](https://github.com/favware/node-packages/commit/387c87534803e3b526d479564d60fd5d96479085))

# [1.1.0](https://github.com/favware/node-packages/compare/@favware/ts-config@1.0.2...@favware/ts-config@1.1.0) (2019-11-10)

### Features

- **ts-config:** set base target to es2020 ([d143d47](https://github.com/favware/node-packages/commit/d143d470b6e749d3e3bee997569582be181c4fe0))

## [1.0.2](https://github.com/favware/node-packages/compare/@favware/ts-config@1.0.1...@favware/ts-config@1.0.2) (2019-11-09)

**Note:** Version bump only for package @favware/ts-config

## 1.0.1 (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))
