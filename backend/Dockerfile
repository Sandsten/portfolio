FROM node:lts-alpine3.13@sha256:954f97825c2b535defef235dd8b92a7936b59b12aa6685bc1b5c17864b2812c3

WORKDIR /server

# Copy over package file and install
COPY [ "package.json", "package-lock.json", "./" ]
RUN npm install

# Copy everything into the docker container
# .dockerignore file will prevent node_modules if it exists
COPY . .

# Default is to just run the regular start command
CMD [ "npm", "start" ]