# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# Table of Contents
1. [Webcomponents](#webcomponents)
2. [Eslint Config](#eslint_config)
3. [Stylelint Config](#stylelint_config)
4. [TSLint Config](#tslint_config)
4. [Usercreator](#usercreator)

## Webcomponents
### [webcomponents-3.0.0] - 2019-08-07
#### Changed
- Changed repo to use Lerna


#### Changed
- LoadingSkeleton: Allow for string based sizing

### [webcomponents-2.4.1] - 2019-07-25
#### Added
- Restyled buttons to better match Material-UI buttons

### [webcomponents-2.4.0] - 2019-07-17
#### Added
- SimpleTooltip component
  - This is separate from Tooltip as it doesn't have an arrow and is more like the standard Material-UI tooltip

#### Changed
- CSSProperties imports from Material-UI instead of React
- style in SearchBar component uses CSSProperties as type, instead of any

### [webcomponents-2.3.1] - 2019-07-16
#### Changed
- Added passing data-qa and custom styles to LoadingSkeleton
- Added passing data-qa and custom styles to Logo

### [webcomponents-2.3.0] - 2019-07-16
#### Added
- LoadingSkeleton component

#### Changed
- Component and Snapshot test structure

### [webcomponents-2.2.5] - 2019-07-11
#### Changed
- Fixed modal icon sizing

### [webcomponents-2.2.4] - 2019-07-08
#### Added
- Added Modal component
- Added ModalContent component

#### Removed
- Styleguidist

### [webcomponents-2.2.3] - 2019-07-03
#### Fixed
- Tooltip data-qa passing through

### [webcomponents-2.2.2] - 2019-06-28
#### Fixed
- Tooltip positioning

### [webcomponents-2.2.1] - 2019-06-28
#### Fixed
- Refactored entire Table component to fix passing its props

#### Added
- Support for hiding either top and/or bottom pagination for Table

### [webcomponents-1.1.0] - 2019-06-25
#### Added
- Added Table component
- Added TableBodyCell component
- Added TableHeaderCell component
- Added TablePagination component
- Added TablePaginationActions component
- Added TableToolbar component
- Added Tooltip component
- Added SearchBar component

#### Changed
- Changed Button internal naming

### [webcomponents-1.0.5] - 2019-06-25
#### Fixed
- Fixed styling for button components

### [webcomponents-1.0.2] - 2019-06-04
#### Added
- ActionBar component

### [webcomponents-1.0.1] - 2019-05-28
#### Removed
- PropTypes dependency

### [webcomponents-1.0.0] - 2019-05-28
- First stable release

### [webcomponents-0.0.1] - 2019-05-23
- Set up project

## Eslint Config
### [eslint-config-1.0.1] - 2019-08-07
#### Fixed
- Fixed the new-cap exclusion regex

### [eslint-config-1.0.0] - 2019-08-07
- Initial release

## Stylelint Config
### [stylelint-config-3.0.0] - 2019-08-07
#### Changed
- Changed repo to use Lerna

### [stylelint-config-2.0.1] - 2019-07-25
#### Fixed
- Selector-class-pattern rule should use patternRegex

### [stylelint-config-2.0.0] - 2019-07-25
#### Added
- ESLint for linting check on source code
- Use Rollup for building a bundle

#### Changed
- Removed default rules that are set by stylelint modules we extend.
- Updated various rules for better linting

### [stylelint-config-1.0.0] - 2019-05-23
#### Changed
- Setup style linting config

## TSLint Config
### [tslint-config-2.0.0] - 2019-08-07
#### Changed
- Bundling with Rollup
- Build in TypeScript

### [tslint-config-1.0.1] - 2019-06-04
- Set up project

## Usercreator
### [usercreator-2.0.0] - 2019-08-07
- Bundle with Rollup

[webcomponents-3.0.0]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.4.2...webcomponents-v3.0.0
[webcomponents-2.4.2]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.4.1...webcomponents-v2.4.2
[webcomponents-2.4.1]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.4.0...webcomponents-v2.4.1
[webcomponents-2.4.0]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.3.1...webcomponents-v2.4.0
[webcomponents-2.3.1]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.3.0...webcomponents-v2.3.1
[webcomponents-2.3.0]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.2.5...webcomponents-v2.3.0
[webcomponents-2.2.5]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.2.4...webcomponents-v2.2.5
[webcomponents-2.2.4]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.2.3...webcomponents-v2.2.4
[webcomponents-2.2.3]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.2.2...webcomponents-v2.2.3
[webcomponents-2.2.2]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v2.2.1...webcomponents-v2.2.2
[webcomponents-2.2.1]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v1.1.0...webcomponents-v2.2.1
[webcomponents-1.1.0]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v1.0.5...webcomponents-v1.1.0
[webcomponents-1.0.5]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v1.0.2...webcomponents-v1.0.5
[webcomponents-1.0.2]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v1.0.1...webcomponents-v1.0.2
[webcomponents-1.0.1]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v1.0.0...webcomponents-v1.0.1
[webcomponents-1.0.0]: https://github.com/RWS-NL/air-node-packages/compare/webcomponents-v0.0.1...webcomponents-v1.0.0
[webcomponents-0.0.1]: https://github.com/RWS-NL/air-node-packages/releases/tag/webcomponents-v0.0.1

<!-- Spacer -->

[tslint-config-2.0.0]: https://github.com/RWS-NL/air-node-packages/compare/tslint-v1.0.1...tslint-v2.0.0
[tslint-config-1.0.1]: https://github.com/RWS-NL/air-node-packages/releases/tag/tslint-v1.0.1

<!-- Spacer -->

[stylelint-config-3.0.0]: https://github.com/RWS-NL/air-node-packages/compare/stylelint-v2.0.1...stylelint-v3.0.0
[stylelint-config-2.0.1]: https://github.com/RWS-NL/air-node-packages/compare/stylelint-v2.0.0...stylelint-v2.0.1
[stylelint-config-2.0.0]: https://github.com/RWS-NL/air-node-packages/compare/stylelint-v1.0.0...stylelint-v2.0.0
[stylelint-config-1.0.0]: https://github.com/RWS-NL/air-node-packages/releases/tag/stylelint-v1.0.0

<!-- Spacer -->

[eslint-config-2.0.0]: https://github.com/RWS-NL/air-node-packages/compare/eslint-v1.0.0...eslint-v1.0.1
[eslint-config-1.0.0]: https://github.com/RWS-NL/air-node-packages/releases/tag/eslint-v1.0.0

<!-- Spacer -->

[usercreator-2.0.0]: https://github.com/RWS-NL/air-node-packages/releases/tag/usercreator-v2.0.0