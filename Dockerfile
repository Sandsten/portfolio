## Dockerfile for creating a production image
FROM node:14

# Create a build of our frontend
WORKDIR /client

COPY [ "package.json", "package-lock.json", "./" ]

RUN npm install

COPY ./client .

RUN npm run build

# Main directory with Node.js server
WORKDIR /portfolio

# Grab the built frontend into our main directory
RUN mv ../client/build ./

# Remove the client directory since it isn't needed anymore
RUN rm -r ../client

COPY [ "package.json", "package-lock.json", "./" ]

RUN npm install

COPY ./server .

CMD [ "npm", "start" ]