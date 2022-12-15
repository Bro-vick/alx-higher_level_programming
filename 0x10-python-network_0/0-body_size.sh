#!/usr/bin/env bash
# To display number of bytes in location

curl -s "$1" | wc -c
