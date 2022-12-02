#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# deploying to a custom domain
echo 'shinylink.org' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploying to https://<USERNAME>.github.io
git push -f git@github.com:shinylink-manual/shinylink-manual.github.io.git master:gh-pages

cd -