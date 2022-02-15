# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2022-02-15
### Changed
- Updated documentation to reflect the new purpose for this repository.

## [2.0.0] - 2022-02-07
### Changed
- How the header looks and simplified its content.
- The footer is now empty by default.
- All `.jsonc` files are now under `store/blocks`.
- The home page is now empty by default (apart from a header and the empty footer).

### Removed
- All React components.
- All interface definitions.
- `store/contentSchemas.json` file.
- All custom routes defined in `store/routes.json`.
- All CSS files apart from `vtex.flex-layout.css` and `vtex.store-header.css`.
- Files for Roboto font.
- `sitemap` and `react` builder dependencies.
- Dependencies on multiple VTEX IO apps (see commit [94d23da](https://github.com/vtex/storeframework.store-theme/commit/94d23dab38c452760a6a91a4250095170deb4e2a)).
- All block definitions for `store.search`, `store.custom` and `store.product` pages.

## [1.4.0] - 2022-01-31
### Removed
- `header` and `footer` from `store.orderplaced`.

## [1.3.0] - 2021-03-08
### Added
- `ProductGrid` component + support for CMS sections.

## [1.2.0] - 2021-02-19
### Added
- Banner component + support for CMS sections.

## [1.1.0] - 2021-02-09
### Added
- `ShopByCategory` component + support for CMS sections.

## [1.0.0] - 2021-02-04
### Changed
- This app is not private anymore, it now has `billingOptions` set.

### Added
- `Newsletter` component + support for CMS sections.
- `ProductShelf` component + support for CMS sections.

## [0.0.1] - 2020-12-29

### Added
- Init commit based on [vtex.store-theme@f3026e0](https://github.com/vtex-apps/store-theme/tree/f3026e04801e755ba8656941338c9d54f148bf30).
