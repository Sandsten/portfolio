#!/bin/bash
docker-compose -f docker-compose.dev.yml up --build --remove-orphans


# "scripts": {
#   "prod": "docker-compose -f docker-compose.prod.yml up --build -d",
#   "dev": "docker-compose -f docker-compose.dev.yml up --remove-orphans",
#   "dev:build": "docker-compose -f docker-compose.dev.yml up --build",
#   "build": "docker build"
# },
