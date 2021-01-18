FROM node:14

# Can define environment variables here, but it can also be done optionally from the compose file
# Easier to do in compose, easier accessible. Image doesn't has to be rebuilt

# This folder will be created inside the container!
RUN mkdir -p /home/server

# Copy the content of the folder which Dockerfile is in, into the container
COPY . /home/server

# Working directory in our container. Commands will run here
WORKDIR /home/server

RUN npm install

CMD [ "npm", "run", "start:dev:live" ]