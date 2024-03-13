#!/usr/bin/env bash

function grabField() {
    local field="$1"
    local result=$(cat "pack.toml" | grep "^$field = " | cut -d '=' -f 2 | tr -d '"' | cut -c 2-)
    echo "$result"
}

pack_name=$(grabField "name")
pack_version=$(grabField "version")

echo >&2 'Uploading Pack to Modrinth'
MODRINTH_DATA=$(cat <<EOF
{
    "name": "$pack_name $pack_version"
    "version_number": "$pack_version"
	"version_type": "release",
	"loaders": ["fabric"],
	"featured": true,
	"project_id": "9a0qj1oH",
	"file_parts": [
		"mrpack"
	],
	"primary_file": "mrpack"
}
EOF
)

packwiz mr export

# curl 'https://api.modrinth.com/v2/version' \
# 	-H "Authorization: $MODRINTH_TOKEN" \
# 	-F "data=$MODRINTH_DATA" \
# 	-F "mrpack=@$pack_name-$pack_version.mrpack"

# If this breaks your pc, i am not liable :)
rm "$pack_name-$pack_version.mrpack"