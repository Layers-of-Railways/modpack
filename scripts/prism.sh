#!/bin/bash

# Create output folder
mkdir -p output/

# Copy unsup.ini to prism/.minecraft
cp unsup.ini ./prism/.minecraft/

# cd to prism folder
cd prism/ || exit

# Zip it up and place it in output folder
zip -r ../output/RailwaysPrismPack.zip .

# Delete unsup.ini file
rm ./.minecraft/unsup.ini