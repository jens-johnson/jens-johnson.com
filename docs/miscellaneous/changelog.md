# Jens Johnson's Website: Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to 
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2022-01-28
### Changed
- **Server**
  - Added pretty printing to logs
  - DB request transformations
- **Client**
  - Cleaned up custom front-end scripts
- Created API spec
- Minor bug fixes

## [0.4.0] - 2022-01-27
### Changed
- Refactored the entire site, including server and client
  - Restructure of client and server components

## [0.3.0] - 2021-05-04
### Changed
- Modified client date module to support returning objects
- Modified client browser module to support redirects to blog page
- Updated blog router/controller
   - `GET /posts/images/:year-:month-:day_:size`
### Added
- Default redirect for home page
- AWS Client
   - Image retrieval utility
   - Content module retrieval utility (deprecated)


## [0.2.0] - 2021-04-16
### Added
- Client-side modules:
   - Pagination
- **Blog page**
   - Client-side blog page component
      - Header
      - Landing page
      - Default "no posts found" page
      - Blog router
      - Blog post component
         - Post blurb
            - Landing page
            - Blog page
         - Default "no post found" component
      - Blog sidebar component
   - Blog controller

## [0.2.0] - 2021-04-08
### Changed
- Modified server scripts
- Server config
- Client-side contact config
### Added
- Server modules:
   - JSON schema validation
   - DB
      - Models
   - Router

## [0.1.0] - 2021-03-22
### Added
- Added jsdocs support
- Created `bin/www` run script

## [0.1.0] - 2021-03-21
### Added
- Client-side configuration
   - Config module
   - Utilities package
      - Contact module
- Browser router over application
- Footer component
- Header component
- Home page

### Changed
- Directory structure and modules

## [0.0.0] - 2021-03-19
### Added
- Created initial scaffolding
- `.gitignore`, `package.json`, documentation
