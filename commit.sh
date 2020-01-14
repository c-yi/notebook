#!/usr/bin/env bash
# 确保脚本抛出遇到的错误
set -e
echo -e "\033[32m ✨ ✨ ✨ ✨ 提交开始 ✨ ✨ ✨ ✨ ✨ \033[0m"

echo -e "\033[35m ---------------------------------以下是文件改动信息--------------------------------- \033[0m"
git status
echo -e "\033[35m ---------------------------------以上是文件改动信息--------------------------------- \033[0m"

#echo '---------------------------------以上是文件改动信息---------------------------------'
time=$(date "+%Y/%m/%d %H:%M:%S")
echo -e "\033[32m git提交注释: \033[0m"
read msg
# 跟踪文件
git add -A
# 提交
git commit -m "${msg} - ${time}"
# 更新
# git pull
# 發佈
git push -u origin master

echo -e "\033[32m ✨ ✨ ✨ ✨ 提交完成 ✨ ✨ ✨ ✨ ✨ \033[0m"
