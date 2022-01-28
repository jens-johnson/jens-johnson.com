# Infrastructure Overview

*Last Updated: 2022-01-28*

## Introduction

This document provides a brief overview of the infrastructure used to create this project.

## Hosting

- I'm using [AWS LightSail](https://aws.amazon.com/lightsail/) to host the site.
- The site is deployed on a pre-configured `MEAN` stack running on a Bitnami Linux instance.
- This pre-configuration allowed me to quickly deploy the application while focusing on the app itself.

## Storage

- The website uses the MongoDB instance on the LightSail stack for storage.
- The application itself uses a client that connects to the DB through a privileged role, i.e.:
  ![](../../_images/db_authentication.jpg)
- The access role/connection URI is authenticated through a simple username/password combination specified in the connection string, i.e.:
  ```
  mongodb://{user}:{password}@{host}:{port}/{website-database-name}?authSource=admin&readPreference=primary&directConnection=true
  ```
- I've also created roles that allow me to connect to the website database through services like MongoDB compass for debugging and development.