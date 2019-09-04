# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.2.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@6.1.1...@rws-air/webcomponents@6.2.0) (2019-09-04)


### Features

* **webcomponents:** add ZeroWidthSpace component ([4f21e95](https://github.com/RWS-NL/air-node-packages/commit/4f21e95))





## [6.1.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@6.1.0...@rws-air/webcomponents@6.1.1) (2019-09-03)


### Bug Fixes

* **eslint-config:** disable jest rule that we don't need ([f21be02](https://github.com/RWS-NL/air-node-packages/commit/f21be02))





# [6.1.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@6.0.0...@rws-air/webcomponents@6.1.0) (2019-08-28)


### Features

* **webcomponents:** add optional tooltips to PaperButtons ([f0d5e17](https://github.com/RWS-NL/air-node-packages/commit/f0d5e17))





# [6.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@5.1.1...@rws-air/webcomponents@6.0.0) (2019-08-28)


### Bug Fixes

* **searchbar:** actually parse paperElevation pro ([7d8dc34](https://github.com/RWS-NL/air-node-packages/commit/7d8dc34))


### Features

* **webcomponents:** many changes, see details ([0ac322d](https://github.com/RWS-NL/air-node-packages/commit/0ac322d))


### Performance Improvements

* fix snapshot tests ([efe4923](https://github.com/RWS-NL/air-node-packages/commit/efe4923))


### BREAKING CHANGES

* **webcomponents:** - Removed Tooltip
- Renamed SimpleTooltip to Tooltip
- TablePagination page numbers are hidden on mobile
- Renamed "types" to "constants"





## [5.1.1](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@5.1.0...@rws-air/webcomponents@5.1.1) (2019-08-23)

**Note:** Version bump only for package @rws-air/webcomponents





# [5.1.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@5.0.0...@rws-air/webcomponents@5.1.0) (2019-08-21)


### Features

* **webcomponents (actionbar):** new optional prop: shouldDisableButton ([267e2d3](https://github.com/RWS-NL/air-node-packages/commit/267e2d3))





# [5.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@4.1.0...@rws-air/webcomponents@5.0.0) (2019-08-20)


### Bug Fixes

* **webcomponents:** injects stylesheets at the top ([c00085d](https://github.com/RWS-NL/air-node-packages/commit/c00085d))


### BREAKING CHANGES

* **webcomponents:** Webcomponent stylesheets are now pushed to the top of the <head> tag





# [4.1.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@4.0.0...@rws-air/webcomponents@4.1.0) (2019-08-19)


### Features

* **stylelint-config:** set default severity to Error by default ([fb8a073](https://github.com/RWS-NL/air-node-packages/commit/fb8a073))





# [4.0.0](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@3.0.6...@rws-air/webcomponents@4.0.0) (2019-08-15)


### Bug Fixes

* upgrade eslint-config to fully support [@typescript-eslint](https://github.com/typescript-eslint) v2.x ([0fee61f](https://github.com/RWS-NL/air-node-packages/commit/0fee61f))


### BREAKING CHANGES

* tsconfig.eslint.json is now required in the root of the folder due to breaking
changes made by typescript-eslint





## [3.0.6](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@3.0.5...@rws-air/webcomponents@3.0.6) (2019-08-14)


### Bug Fixes

* **webcomponents:** fix prepublish script ([7b38cf1](https://github.com/RWS-NL/air-node-packages/commit/7b38cf1))
* **webcomponents:** fixed prePublish script for real now ([108e86a](https://github.com/RWS-NL/air-node-packages/commit/108e86a))





## [3.0.5](https://github.com/RWS-NL/air-node-packages/compare/@rws-air/webcomponents@3.0.4...@rws-air/webcomponents@3.0.5) (2019-08-14)

**Note:** Version bump only for package @rws-air/webcomponents





## 3.0.4 (2019-08-14)


### Reverts

* revert lerna not being in independent mode ([d1072b8](https://github.com/RWS-NL/air-node-packages/commit/d1072b8))





## 3.0.3 (2019-08-14)

**Note:** Version bump only for package @rws-air/webcomponents

### 3.0.2 (2019-08-13)
#### Changes
- Package json refactoring

### 3.0.1 (2019-08-13)
#### Adds
- This changelog

### 3.0.0 (2019-08-07)
#### Changes
- Changed repo to use Lerna

### 2.4.1 (2019-07-25)
#### Adds
- Restyled buttons to better match Material-UI buttons

### Changes
- LoadingSkeleton: Allow for string based sizing

### 2.4.0 (2019-07-17)
#### Adds
- SimpleTooltip component
  - This is separate from Tooltip as it doesn't have an arrow and is more like the standard Material-UI tooltip

#### Changes
- CSSProperties imports from Material-UI instead of React
- style in SearchBar component uses CSSProperties as type, instead of any

### 2.3.1 (2019-07-16)
#### Changes
- Added passing data-qa and custom styles to LoadingSkeleton
- Added passing data-qa and custom styles to Logo

### 2.3.0 (2019-07-16)
#### Adds
- LoadingSkeleton component

#### Changes
- Component and Snapshot test structure

### 2.2.5 (2019-07-11)
#### Changes
- Fixed modal icon sizing

### 2.2.4 (2019-07-08)
#### Adds
- Added Modal component
- Added ModalContent component

#### Removed
- Styleguidist

### 2.2.3 (2019-07-03)
#### Fixes
- Tooltip data-qa passing through

### 2.2.2 (2019-06-28)
#### Fixes
- Tooltip positioning

### 2.2.1 (2019-06-28)
#### Fixes
- Refactored entire Table component to fix passing its props

#### Adds
- Support for hiding either top and/or bottom pagination for Table

### 1.1.0 (2019-06-25)
#### Adds
- Added Table component
- Added TableBodyCell component
- Added TableHeaderCell component
- Added TablePagination component
- Added TablePaginationActions component
- Added TableToolbar component
- Added Tooltip component
- Added SearchBar component

#### Changes
- Changed Button internal naming

### 1.0.5 (2019-06-25)
#### Fixes
- Fixed styling for button components

### 1.0.2 (2019-06-04)
#### Adds
- ActionBar component

### 1.0.1 (2019-05-28)
#### Removed
- PropTypes dependency

### 1.0.0 (2019-05-28)
- First stable release

### 0.0.1 (2019-05-23)
- Set up project
