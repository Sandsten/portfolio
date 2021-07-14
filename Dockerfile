## Dockerfile for creating a production image
FROM node:lts-alpine3.13@sha256:954f97825c2b535defef235dd8b92a7936b59b12aa6685bc1b5c17864b2812c3 as builder
# v14.17.0

##################
# FRONTEND BUILD #
##################

# Create a folder for frontend building and set current directory to it
WORKDIR /frontend

# Copy package files from client folder into our new working directory in our image
COPY [ "./client/package.json", "./client/package-lock.json", "./" ]

# Install all packages required for building the frontend. which includes dev-dependencies
RUN npm install

# Copy all client code into /frontend-building directory inside the container
COPY ./client .

# Build the frontent with webpack
RUN npm run build

#################
# BACKEND BUILD #
#################

# Change working directory to backend
WORKDIR /backend

# Grab the built frontend into our main directory
RUN mv ../frontend/build ./

COPY [ "./server/package.json", "./server/package-lock.json", "./" ]

# Only the production packages are needed in the image ment for being deployed
ENV NODE_ENV production

# Make a clean install of node packages which are needed for production
RUN npm ci --only=production

# Copy all server source code into image
COPY ./server/src ./src

###############
# FINAL BUILD #
###############

## This FROM will start a new container
FROM node:lts-alpine3.13@sha256:954f97825c2b535defef235dd8b92a7936b59b12aa6685bc1b5c17864b2812c3 

WORKDIR /app

COPY --from=builder /backend/ /app/

CMD [ "npm", "start" ]
