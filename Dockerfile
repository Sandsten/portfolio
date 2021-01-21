## Dockerfile for creating a production image
FROM node:14

# Create a build of our frontend
WORKDIR /client

# Copy package files from client folder into our new working directory in our image
COPY [ "./client/package.json", "./client/package-lock.json", "./" ]

# Make sure all dev dependencies are installed for the client, so we are able to build using webpack
ENV NODE_ENV=development

RUN npm install

COPY ./client .

RUN npm run build

# Main directory with Node.js server
WORKDIR /portfolio

# Grab the built frontend into our main directory
RUN mv ../client/build ./

# Remove the client directory since it isn't needed anymore
RUN rm -r ../client

COPY [ "./server/package.json", "./server/package-lock.json", "./" ]

# Only the production packages are needed in the image ment for being deployed
ENV NODE_ENV=production

RUN npm install

COPY ./server .

CMD [ "npm", "start" ]