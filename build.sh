#!/bin/sh

mkdir -p chapter2
cd chapter2
cp -LR ../00_start/* .
cd ..
zip -qr chapter2.zip chapter2