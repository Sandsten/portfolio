#!/bin/bash
# $# means number of input arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

packageFile="./package.json"
# Get the project version and store it in a variable $(command) allows us to store the output of the command in a variable
projectVersion=$(jq '.version' $packageFile)
# Remove the surrounding " characters
projectVersion=$(echo $projectVersion | tr -d '"')
# Convert to array bt surrounding with () and replaceing . with blank space
# Only converting to array to easily replace the number we want.
# Can probably be done cleaner with sed/regex or something in that direction
myarray=(`echo $projectVersion | tr '.' ' '`)

# Increment based on the argument given to the project x.y.z
# z=Patch, y=Minor, x=Major
echo "Current version: "$projectVersion
if [ $1 = 'major' ]; then
  myarray[0]=$((myarray[0] + 1)) # Major
elif [ $1 = 'minor' ]; then
  myarray[1]=$((myarray[1] + 1)) # Minor
elif [ $1 = 'patch' ]; then
  myarray[2]=$((myarray[2] + 1)) # Patch
else
  echo "Wrong version type given. specify major, minor or patch"
  exit 1
fi

# Get the array back to its original form "x.y.x"
# Replace spaces with .
newVersion=$(echo ${myarray[*]} | tr ' ' '.')
echo "New version: " $newVersion
# Surround with '
# Doesn't work the other way around... so have to do this extra maneuver
newVersion="'$newVersion'"
# Replace single quote with double quote
newVersion=$(echo $newVersion | tr "'" '"')
# Update the version value
newPackageContent=$(jq ".version|=$newVersion" $packageFile)
# Overwrite the content in package.json with the new one where version has been updated
# jq . <json string> will print pretty
echo $newPackageContent | jq . > package.json

# Build the docker image

# Tag the docker image with the version number & update :latest to this image as well!


