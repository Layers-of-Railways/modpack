#!/bin/bash

# Create output folder
mkdir -p output/

# cd to prism folder
cd prism/ || exit

# Zip it up and place it in output folder
zip -r ../output/RailwaysPrismPack.zip .