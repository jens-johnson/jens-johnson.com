#!/bin/bash

validate() {
 if [ "$(node -v)" != "$(cat .nvmrc)" ]; then
   echo "ERROR: The current version of node ($(node -v)) is incompatible with the version specified ($(cat .nvmrc))"
   exit 1
 fi
}

run() {
  validate
  node bin/server/www
}

run