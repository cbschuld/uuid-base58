# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-09-01

### ⚠️ BREAKING CHANGES

- **Minimum Node.js 14** required (previously had no explicit requirement)
- **Package type changed to ESM** - may affect some bundler configurations or Node.js module resolution
- **Stricter package exports** - only documented import paths are now supported (improves tree-shaking but may break undocumented imports)

### Added

- Native Node ESM support via `package.json` exports and patched ESM internal imports
- Enhanced browser support with Web Crypto API preference
- Explicit Node.js version requirement in `engines` field
- CI caching for npm to speed up installs

### Changed

- **API remains 100% compatible** - all functions (`uuid58`, `encode`, `decode`, `valid`, `uuidV4NoDash`) work identically
- CommonJS consumers continue to work unchanged (`require('uuid-base58')`)
- Broader environment compatibility for RNG: prefers Web Crypto in browsers, falls back to Node `crypto`
- Tooling modernization: ESLint replaces deprecated TSLint, updated TypeScript/Jest/Prettier versions

## [1.3.0] - 2022-08-12

### Added

- exposed the 'uuidV4NoDash' function

## [1.2.1] - 2022-07-05

### Changes

- added ESM so both ESM and CommonJS are provided

## [1.2.0] - 2021-03-19

### Changes

- localized the creation of v4 RNG UUIDs

## [1.1.0] - 2020-04-07

- Initial Release
