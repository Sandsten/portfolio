#!/bin/bash
############################################################
# Help                                                     #
############################################################
Help()
{
   # Display Help
   echo "Start dev environment with docker for portfolio"
   echo
   echo "Syntax: scriptTemplate [-g|h|v|V]"
   echo "options:"
   echo "-h     Print this Help."
   echo "-o     Remove orphans."
   echo "-b     Rebuild images (if new npm packages have been added you should include this)."
   echo
}

# Base compose command
DevCommand="docker-compose -f docker-compose.dev.yml up"

# list of arguments expected in the input
optstring=":hob"

## getops will return a list with all options given to script (-h etc)
while getopts ${optstring} option; do
  case $option in
    h) # display help. each option is called a "stanza" h) is a stanza
      Help
      exit
      ;; # Each option must end with ;;
    o)
      DevCommand+=" --remove-orphans"
      ;;      
    b)
      DevCommand+=" --build"
      ;;
    \?) # Match any option which hasn't been defined up above ^
        echo "Error: Invalid option"
        exit
        ;;
  esac
done

echo "Executing: "$DevCommand
eval $DevCommand

# "scripts": {
#   "prod": "docker-compose -f docker-compose.prod.yml up --build -d",
#   "dev": "docker-compose -f docker-compose.dev.yml up --remove-orphans",
#   "dev:build": "docker-compose -f docker-compose.dev.yml up --build",
#   "build": "docker build"
# },
