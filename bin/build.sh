#!/bin/sh -eu

mkdir -p ./lib
rm -rf ./lib/*
tsc
cp README.md ./lib
cp package.json ./lib