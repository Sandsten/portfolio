FROM node:14

# Can define environment variables here, but it can also be done optionally from the compose file
# Easier to do in compose, easier accessible. Image doesn't has to be rebuilt

WORKDIR /server

# This folder will be created inside the container!
COPY [ "package.json", "package-lock.json", "./" ]

RUN npm install

COPY . .
# COPY ./src ./src
# COPY ./.env ./

# Default is to just run the regular start command
CMD [ "npm", "start" ]