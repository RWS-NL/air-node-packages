# TSLint Config AIR

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for all AIR applications using TypeScript

## Installation

```sh
yarn add -D @rws-air/tslint-config
```

## Usage

In `tslint.json`:

```json
// ...
{
    "extends": ["@rws-air/tslint-config"]
}
// ...
```

To fully utilize this config you should pass the [`--project`](https://palantir.github.io/tslint/usage/cli/#cli-usage) flag to TSLint!