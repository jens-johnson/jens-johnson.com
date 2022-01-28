# To Do

## Introduction

This document provides an overview of outstanding features, tasks, and fixes for the application,
where:
- **Features** describe functionality from an end-user perspective (i.e. a new webpage that shows past projects)
- **Tasks** describe implementations that are still outstanding for the website (i.e. E2E request validation)
- **Fixes** describe outstanding bugs/issues needing remediation (i.e. navigation button doesn't work)

## Features

Outstanding features to be implemented in the application

| Feature             | Description                                 | Priority   |
|---------------------|---------------------------------------------|------------|
| **Blog** – Search   | Provide search functionality for blog posts | **Medium** |
| **Blog** - Comments | Provide ability to comment on blog posts    | **Low**    |

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

Development tasks to be completed

| Task                                 | Description                                                    | Priority |
|--------------------------------------|----------------------------------------------------------------|----------|
| **Security** - Request Authorization | Request authorization for client/server interactions           | Medium   |
| **Security** - Database Security     | Implement security measures for interactions with the database | Low      |
| **Testing** - Integration tests      | Integration tests for API calls                                | Low      |
| **Testing** - Integration tests      | Unit tests for server modules                                  | Low      |

### General

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

Issues needing remediation

| Issue                       | Description                                                           | Priority |
|-----------------------------|-----------------------------------------------------------------------|----------|
| Expired Google Maps API key | Google Maps API key expired for client, causing map component to fail | Low      |


- **Issue**: Google Maps API Key expired on client
  - **Priority**: Low
  - **Description**: Google Maps API key in included script on public HTML page (`public.html`) is expired; causing map 
    component to fail
  - **Remediation Strategy**:
    - [ ] Get new key from Google Cloud Console
    - [ ] Add key and test