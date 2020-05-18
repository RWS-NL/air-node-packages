# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.3.0-alpha.1...cra-template-air@2.0.0) (2020-05-18)


### Bug Fixes

* **webcomponents:** use "latest" version for @rws-air/utils ([1e3b017](https://github.com/RWS-NL/air-node-packages/commit/1e3b017bf296527339f1b67e3569207f9c24a2e4))


### Features

* add eslint-config-node and ts-config packages ([db093ba](https://github.com/RWS-NL/air-node-packages/commit/db093ba39bab3c6b97a689017b9a7f41d6422fde))


### BREAKING CHANGES

* FuseJS now returns data for their fuzzy searches
differently. Before the data would be directly on the result, now you'll
need to access it on the "items" property. This affects all queries for
this API that return `[JSONObject!]!` as type.





# [1.3.0-alpha.1](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.3.0-alpha.0...cra-template-air@1.3.0-alpha.1) (2020-05-11)

**Note:** Version bump only for package cra-template-air





# [1.3.0-alpha.0](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.2.0...cra-template-air@1.3.0-alpha.0) (2020-05-11)


### Features

* **cra-template-air:** bump dependencies ([9cc72e7](https://github.com/RWS-NL/air-node-packages/commit/9cc72e792398a0148def5f180dabd2c28fc7a423))





# [1.2.0](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.1.1...cra-template-air@1.2.0) (2020-04-10)

### Features

- **cra-template-air:** replace classnames with clsx for performance ([fbe7d58](https://github.com/RWS-NL/air-node-packages/commit/fbe7d58605d0eb2a5d44f88b0efa0d3723268f2d))

## [1.1.1](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.1.0...cra-template-air@1.1.1) (2020-04-01)

**Note:** Version bump only for package cra-template-air

# [1.1.0](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.0.3...cra-template-air@1.1.0) (2020-03-30)

### Features

- panelgroup ([#323](https://github.com/RWS-NL/air-node-packages/issues/323)) ([cdc6876](https://github.com/RWS-NL/air-node-packages/commit/cdc68765e9a4ebbdb990d7c47ee67d113ccb03eb))

## [1.0.3](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.0.2...cra-template-air@1.0.3) (2020-03-24)

**Note:** Version bump only for package cra-template-air

## [1.0.2](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.0.1...cra-template-air@1.0.2) (2020-03-18)

**Note:** Version bump only for package cra-template-air

## [1.0.1](https://github.com/RWS-NL/air-node-packages/compare/cra-template-air@1.0.0...cra-template-air@1.0.1) (2020-02-14)

**Note:** Version bump only for package cra-template-air

# 1.0.0 (2020-02-06)

### Bug Fixes

- **cra-template-air:** fix gitignore file ([07d16d2](https://github.com/RWS-NL/air-node-packages/commit/07d16d265ba8929e864ecae766186e58323ad8d4))

### Features

- **cra-template-air:** add new package ([19187fd](https://github.com/RWS-NL/air-node-packages/commit/19187fdddaced43660b6562b46c2548c32cd24dc))
- **cra-template-air:** release v1.0.0 ([60b6dac](https://github.com/RWS-NL/air-node-packages/commit/60b6dac5294b722278652bea413e66a8d33bfe4c))

### BREAKING CHANGES

- **cra-template-air:** First release, stable API achieved!
