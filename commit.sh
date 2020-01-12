#!/usr/bin/env bash
# 确保脚本抛出遇到的错误
set -e
time=$(date "+%Y/%m/%d %H:%M:%S")
# echo "${time} 提交"
git add -A
git commit -m '${time} 提交'

# 發佈
git push

cd -
