FROM node:14

#ENV NODE_ENV=development

WORKDIR /client

# Install all node packages
COPY [ "package.json", "package-lock.json", "./" ]
RUN npm install

# Copy over source code and other config files
COPY ./src ./src
COPY .babelrc .babelrc
COPY webpack.config.dev.js webpack.config.dev.js
COPY tsconfig.json tsconfig.json

CMD [ "npm", "start" ]

###

# Can define environment variables here, but it can also be done optionally from the compose file
# Easier to do in compose, easier accessible. Image doesn't has to be rebuilt

# This folder will be created inside the container!
#RUN mkdir -p /home/app

# Copy the content of the folder which Dockerfile is in, into the container
#COPY . /home/app

# Working directory in our container. Commands will run here
#WORKDIR /home/app

#RUN npm install

#CMD [ "npm", "start" ]