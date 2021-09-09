#!/bin/bash
docker-compose -f docker-compose.build.yml up 
sudo chown -R $USER:$USER build/  # Files from the container to the host have root as owner, change it to host user
