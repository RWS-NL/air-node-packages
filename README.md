# TSLint Config AIR

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for all AIR applications using TypeScript

## Installation

```sh
yarn add -D tslint-config-air
```

## Usage

In `tslint.json`:

```json5
// ...
{
    "extends": ["tslint-config-air"]
}
// ...
```

To fully utilize this config you should pass the [`--project`](https://palantir.github.io/tslint/usage/cli/#cli-usage) flag to TSLint!