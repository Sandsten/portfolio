FROM node:16-alpine3.11

WORKDIR /frontend

# Copy over package file and install
COPY [ "package.json", "package-lock.json", "./" ]

# RUN npm config set loglevel info
# RUN npm set progress=false 
RUN npm install --verbose

# Copy everything into the docker container
COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]