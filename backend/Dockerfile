FROM node:18-alpine

WORKDIR /backend

# Copy over package file and install
COPY [ "package.json", "package-lock.json", "./" ]

RUN npm install

# Copy everything into the docker container
# .dockerignore file will prevent node_modules if it exists
COPY . .

EXPOSE 3000

# Default is to just run the regular start command
CMD [ "npm", "start" ]