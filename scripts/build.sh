# Build

yarn

rm -rf dist
mkdir -p dist/lib
cp lib/min/* dist/lib
cp package.json dist

jq '.scripts = {}' ./dist/package.json > ./dist/package.json.upd
mv ./dist/package.json.upd ./dist/package.json