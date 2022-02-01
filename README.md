# [jens-johnson.com](https://www.jens-johnson.com)

**v0.5.0 💻** | **[🔗Documentation](docs)** | **[📜Changelog](docs/miscellaneous/changelog.md)** | **[🌎Site](https://www.jens-johnson.com)**

---
**CURRENT STATUS [2022-01-28]**

The website is currently still in pre-release (0.5.0) as I work to get some last functional pieces going. If all
goes well (🤞🏻), I hope to release v1 very soon. Stay tuned...

---

## Introduction

This repository contains the source code used to run my personal website, as well as documentation surrounding the 
creation of the project, technical solutions, and miscellaneous findings. A great place to learn more about this 
application, how I built it, and how it works, is by reading the
[Creation Overview Guide](docs/creation_documentation/overview.md) I've created in the docs directory. Thanks for 
visiting, and I'm always open to feedback, questions, concerns, etc.

### [docs](docs)

Contains source documentation for the website/application

### [client](client)

Contains the front-end React code and application (the application component itself is initialized in 
[`client/components/Application.jsx`](client/components/Application.jsx))

### [server](server)

Contains the back-end Express server code

Thanks for visiting!

## Development

To run this application locally, I have the following steps/configurations set up:

1. Configure the necessary environment variables (either in a `.env` file in the project or in the shell environment)
   ```shell
   AWS_ACCESS_KEY_ID={aws-access-key-id}
   AWS_SECRET_ACCESS_KEY={aws-secret-access-key}
   MONGODB_URI={mongodb-uri}
   PORT={designated-server-port}
   ```
2. Add an entry to `/etc/hosts` to point the local host to a test website domain:
   ```shell
   $ echo 127.0.0.1 jens-johnson.test.com | sudo tee -a /etc/hosts
   ```
3. Make sure the correct version of Node is configured:
   ```shell
   $ nvm use
   ```
4. Run a fresh development build:
   ```shell
   $ npm i
   $ npm run build:dev
   ```
5. Run the `start` script, which launches the local server and watches for changes in client code to re-bundle static 
   assets:
   ```shell
   $ npm run start:dev
   ```