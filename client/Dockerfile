FROM node:14

WORKDIR /client

# Copy over package file and install
COPY [ "package.json", "package-lock.json", "./" ]
RUN npm install

# Copy everything into the docker container
# .dockerignore file will prevent node_modules if it exists
COPY . .

CMD [ "npm", "start" ]