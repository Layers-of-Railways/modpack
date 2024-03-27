#!/bin/bash

# Create output folder
mkdir -p output/

# Create .minecraft folder
mkdir -p prism/.minecraft/

# Copy unsup.ini & unsup.jar to prism/.minecraft
cp unsup.ini prism/.minecraft/
cp unsup.jar prism/.minecraft/

# cd to prism folder
cd prism/ || exit

# Zip it up and place it in output folder
zip -r ../output/RailwaysPrismPack.zip .

# Delete unsup.ini & unsup.jar files
rm -rf .minecraft/