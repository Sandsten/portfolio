# Portfolio website
This website is for the sole purpose of being my portfolio and learning fullstack development.  
So far I'm quite proficient in maintaining a server running Linux which serves various websites using Nginx.  
For larger applications with lots of dependencies I'm using Docker to keep things separate from each other.

This website is currently hosted on a droplet provided by DigitalOcean.

## Tech
Most prominent tech used for developing this website
* React
  * Frontend
* Node
  * Backend
  * NPM for package management
* Mongodb
  * Storing most of the displayed frontend data
  * Stores the websites admin username and hashed password
* Docker
  * Building an image for easy deployment and storage of entire website
  * So far it's 132Mb in size, continuously working on making it smaller
  * Deploying the image with docker-compose
* Ubuntu
  * Operating system of choice when developing (Using WSL2 on Windows)
  * Operating system of choice as server
  * No particular reason for using Ubuntu over any other Linux distro. It's the one I started with and I rather master a single one than constantly distro-jump.
* SSH
  * Accessing remote server
* Nginx
  * As reverse proxy from port 443 to node app
* Certbot
  * Generate SSL certificates to enable HTTPS
* VSCode
  * IDE of choice

## Developing 
To start developing, simply run the following command:  
```bash
docker-compose -f docker-compose.dev.yml up --build
```  
You can also just run `./run-dev.sh` which will execute what's above.

## Production

### Compose file for deploying website
```yml
# Compose file for production
version: '3.8'

services:
  portfolio:
    image: sandsten/portfolio-website:latest
    # '127.0.0.1:3000:3000' will ensure port 3000 is only exposed to host and not remote
    # Remote access should be handled by Nginx instead!
    ports:
      - '127.0.0.1:3000:3000'
    environment:
      DATABASE: remote
      NODE_ENV: production
      PORT: 3000
    env_file:
      - secrets.env
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

