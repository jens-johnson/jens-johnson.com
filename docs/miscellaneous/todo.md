# To Do

## Introduction

This document provides an overview of outstanding features, tasks, and fixes for the application,
where:
- **Features** describe functionality from an end-user perspective (i.e. a new webpage that shows past projects)
- **Tasks** describe implementations that are still outstanding for the website (i.e. E2E request validation)
- **Fixes** describe outstanding bugs/issues needing remediation (i.e. navigation button doesn't work)

## Features

**Outstanding:**

| Feature             | Description                                 | Priority   |
|---------------------|---------------------------------------------|------------|
| **Blog** – Search   | Provide search functionality for blog posts | **Medium** |
| **Blog** - Comments | Provide ability to comment on blog posts    | **Low**    |

**Completed:**

| Feature | Description | Priority |
|---------|-------------|----------|
|         |             |          |

### Blog

#### Search

**Description**: Blog search feature

**Priority**: Medium

**Features**:
- [ ] Filtered blog results also filter out applicable tags on the sidebar
- [ ] Query string validation
- [ ] Support operational filters (`or`, `and`)
- [ ] Text box keyword search on the sidebar
- [ ] Result sorting

#### Comments

**Description**: Blog posts support comments

**Priority**: Low

**Features**:
- [ ] Text box for comments on posts
- [ ] Data model for post comment CRUD operations

## Tasks

**Outstanding:**

| Task                                 | Description                                                    | Priority |
|--------------------------------------|----------------------------------------------------------------|----------|
| **Security** - Request Authorization | Request authorization for client/server interactions           | Medium   |
| **Code Quality** - Linting           | Add linting to project                                         | Medium   |
| **Testing** - Integration tests      | Integration tests for API calls                                | Low      |
| **Testing** - Integration tests      | Unit tests for server modules                                  | Low      |
| **Security** - Database Security     | Implement security measures for interactions with the database | Low      |

**Completed:**

| Task | Description | Priority |
|------|-------------|----------|
|      |             |          |

### General

#### Code Quality

##### Linting

**Description**: Add linting to code

**Priority**: Medium

**Tasks**:
- [ ] Create ES lint configuration
- [ ] Install dependencies
- [ ] Add linting scripts to package

#### Security

##### Request Authorization

**Description**: Authenticate requests to the Express server

**Priority**: Medium

**Tasks**:
- [ ] Research client/server authorization solutions
- [ ] Create client/server validation
  - [ ] Implement request header validation on server
  - [ ] Implement request header creation on client
- [ ] Identify how to create client/server secrets

##### Database Security

**Description**: Implement security over database access

**Priority**: Low

**Tasks**:
- [ ] Research MongoDB security solutions

#### Testing

##### Integration Tests

**Description**: Create integration tests for the API

**Priority**: Low

**Tasks**:
- [ ] Implement integration tests for API endpoints

##### Unit Tests

**Description**: Unit tests for server modules

**Priority**: Low

**Tasks**:
- [ ] Implement unit tests for server modules

## Fixes

**Outstanding:**

| Issue                           | Description                                         | Priority |
|---------------------------------|-----------------------------------------------------|----------|
| Redundant/vulnerable vendor CSS | Vendor CSS containing error-prone/inaccurate syntax | Low      |
| NPM package vulnerabilities     | NPM package contains several vulnerabilities        | High     |

**Completed:**

| Issue                       | Description                                                           | Priority |
|-----------------------------|-----------------------------------------------------------------------|----------|
| Expired Google Maps API key | Google Maps API key expired for client, causing map component to fail | Low      |



- **Issue**: Redundant/vulnerable vendor CSS
  - **Priority**: Low
  - **Description**: Provided CSS used in website scaffolding is redundant/error-prone (i.e. not linted, mis-spelled,
    etc.)
  - **Remediation Strategy**:
    - [ ] Investigate CSS warnings
    - [ ] Fix spelling
    - [ ] Consolidate/fix SCSS files
- **Issue**: NPM package vulnerabilities
  - **Priority**: High
  - **Description**: NPM package contains several vulnerabilities; `npm audit fix --force` not working and hangs
  - **Remediation Strategy**:
    - [ ] Investigate further; identify why audit hanging