#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist
# cd docs/

# 打包
git init
git add -A
git commit -m 'deploy'

# 發佈
git push -f git@github.com:c-yi/notebook.git master:gh-pages

cd -