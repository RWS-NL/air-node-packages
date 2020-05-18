# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0 (2020-05-18)


### Features

* add eslint-config-node and ts-config packages ([db093ba](https://github.com/RWS-NL/air-node-packages/commit/db093ba39bab3c6b97a689017b9a7f41d6422fde))


### BREAKING CHANGES

* FuseJS now returns data for their fuzzy searches
differently. Before the data would be directly on the result, now you'll
need to access it on the "items" property. This affects all queries for
this API that return `[JSONObject!]!` as type.
