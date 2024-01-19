FROM node:20-alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /frontend

# Copy over package file and install
COPY [ "package.json", "package-lock.json", "./" ]

# RUN npm config set loglevel info
# RUN npm set progress=false 
RUN npm install

# Copy everything into the docker container
COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]