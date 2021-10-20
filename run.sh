#!/bin/bash
############################################################
# Help                                                     #
############################################################
Help()
{
   # Display Help
   echo "Starts the webap with production image as default. Options can be given to run in dev mode instead"
   echo
   echo "Syntax: scriptTemplate [-g|h|v|V]"
   echo "options:"
   echo "-h     Print this Help."
   echo "-d     Starts development environment"
   echo "-b     Starts dev environmebt and also rebuilds images and removes orphans (use this if new packages have been added etc)."
   echo "-p     Run production image."
   echo
}

# Base compose command
DevCommand="docker compose up"

# list of arguments expected in the input
optstring=":hdb"

## getops will return a list with all options given to script (-h etc)
while getopts ${optstring} option; do
  case $option in
    h) # display help. each option is called a "stanza" h) is a stanza
      Help
      exit
      ;; # Each option must end with ;;
    d)
      DevCommand="docker compose -f docker-compose.dev.yml up"
      ;;
    b)
      #DevCommand="docker-compose -f docker-compose.dev.yml up --build  --remove-orphans"
      DevCommand="docker compose -f docker-compose.dev.yml up --build  --remove-orphans"
      ;;
    \?) # Match any option which hasn't been defined up above ^
        echo "Error: Invalid option"
        exit
        ;;
  esac
done

echo "Executing: "$DevCommand
eval $DevCommand
