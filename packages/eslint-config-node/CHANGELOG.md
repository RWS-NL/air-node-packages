# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.3](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/eslint-config-node@2.0.2...@rws-air/eslint-config-node@2.0.3) (2020-08-18)

**Note:** Version bump only for package @rws-air/eslint-config-node





## [2.0.2](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/eslint-config-node@2.0.1...@rws-air/eslint-config-node@2.0.2) (2020-05-25)


### Bug Fixes

* **eslint-config(-node):** fixed ban-ts-ignore rule ([5cd645a](https://github.com/RWS-NL/air-node-packages/commit/5cd645af6b80de09ca0a5832847569035689a1ff))
* **eslint-config(-node):** fixed eslint configs, they broke with eslint v7 ([c7468c0](https://github.com/RWS-NL/air-node-packages/commit/c7468c09b83dca99954bac96e6b3555429cfcef3))





## [2.0.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/eslint-config-node@2.0.0...@rws-air/eslint-config-node@2.0.1) (2020-05-22)


### Bug Fixes

* **eslint-config-node:** disable explicit-module-boundary-types and no-explicit-any ([547522e](https://github.com/RWS-NL/air-node-packages/commit/547522e8e8d69da9c403f11e7203fe2c67142816))





# [2.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/eslint-config-node@1.0.0...@rws-air/eslint-config-node@2.0.0) (2020-05-22)


### Features

* **eslint-config:** bumped eslint and [@typescript-eslint](https://github.com/typescript-eslint) to v7 and v7 respectively ([3d9ab97](https://github.com/RWS-NL/air-node-packages/commit/3d9ab97f5d3b77ed32ecd7d752bd02c1586d5ec7))


### BREAKING CHANGES

* **eslint-config:** Dropped support for NodeJS version  <= 8.x.
* **eslint-config:** Dropped support for TypeScript version <= 3.2.

Signed-off-by: Jeroen Claassens <j.claassens@cgi.com>





# 1.0.0 (2020-05-18)


### Features

* add eslint-config-node and ts-config packages ([db093ba](https://github.com/RWS-NL/air-node-packages/commit/db093ba39bab3c6b97a689017b9a7f41d6422fde))


### BREAKING CHANGES

* FuseJS now returns data for their fuzzy searches
differently. Before the data would be directly on the result, now you'll
need to access it on the "items" property. This affects all queries for
this API that return `[JSONObject!]!` as type.
