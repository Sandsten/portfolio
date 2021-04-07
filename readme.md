## Starting  
To start developing, simply run the following command:  
```bash
npm run dev
```  
It's using docker-compose to build the frontend + backend in separate containers.  
It will build the frontend with webpack and then move the build folder into our server directory.  
When a new version is pushed to Github a new image is created and stored on docker hub

## Good to remember
```bash
# Deploy the website
docker stack deploy -c docker-compose-portfolio.yml portfolio --with-registry-auth
# Create a production image and run it   
npm run prod  
# Only create a new image with the tag test  
npm run image   
```



Docker compose file for starting the app as a service with Docker
```yml
version: "3.9"

services:
  app:
    image: sandsten/portfolio-website:latest
    #image: sandsten/portfolio:test
    deploy:
      replicas: 1
    ports:
      - "8010:3000"

    # Create environment variables which store the path to the injected files which store our secrets

    # The environment variables has to be extended with _FILE according to the docs
    # NOTE: The environment variables will only store the path to the file in which the secret is stored
    # In the container/service secrets will be injected to the folder /run/secrets
    # To then access the different secrets in your application you have to read the content of the files!
    environment:
      JWT_SECRET_FILE: /run/secrets/JWT_SECRET
      MONGODB_ATLAS_USERNAME_FILE: /run/secrets/MONGODB_ATLAS_USERNAME
      MONGODB_ATLAS_PASSWORD_FILE: /run/secrets/MONGODB_ATLAS_PASSWORD
      SERVER: live
    # Grant this service access to the following secrets
    secrets:
      - JWT_SECRET
      - MONGODB_ATLAS_USERNAME
      - MONGODB_ATLAS_PASSWORD

# If you have created a secret on a manager node in the swarm. Use external: true
secrets:
  JWT_SECRET:
    external: true
  MONGODB_ATLAS_USERNAME:
    external: true
  MONGODB_ATLAS_PASSWORD:
    external: true

```


## TODO

- ~~Front end should be responsive.~~
- ~~Dark and light color theme option.~~
- ~~Sign in to website as admin~~
- ~~Authorize certain api calls with JWT~~
- **add**/**update** projects, blogposts and so forth through my website.
- All the data should be stored in mongodb running localy on server
- Integrated CV, not just a PDF
- Add video tutorials
- Add classical guitar videos
- Add some shorter text tutorials

## Goal

- Create a **front-end** and **back-end** application as my portfolio
- To use **NodeJS with MongoDB as back-end**, **React as front-end**, **Webpack as bundler** and host it on **Heroku**

