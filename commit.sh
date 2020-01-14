#!/usr/bin/env bash
# 确保脚本抛出遇到的错误
set -e
echo ' ✨ ✨ ✨ ✨ 提交开始 ✨ ✨ ✨ ✨ ✨ '
echo '---------------------------------以下是文件改动信息---------------------------------'
git status
echo '---------------------------------以上是文件改动信息---------------------------------'
time=$(date "+%Y/%m/%d %H:%M:%S")
echo "git提交注释:"
read msg
echo "${msg} - ${time}"
# 跟踪文件
git add -A
# 提交
git commit -m "${msg} - ${time}"
# 更新
# git pull
# 發佈
git push -u origin master

echo ' ✨ ✨ ✨ ✨ 提交完成 ✨ ✨ ✨ ✨ ✨ '
