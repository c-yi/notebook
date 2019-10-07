# 常用命令

## 创建版本库
```
git init
git clone
```

 ## 查看信息
 ```
 git help
 git diff 比较差异
 git log 提交日志
    参数
    -n  git log -3 查看最近三条的日志信息 
    -p  git log -p 查看每次提交的内容差异
    --pretty=oneline    git log --pretty=oneline 一行显示简要日志信息
 ```
 
## 配置信息 
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
来设置您账号的缺省身份标识。
如果仅在本仓库设置身份标识，则省略 --global 参数。

## 三个地方去修改这个配置
```
/etc/gitconfig (这台计算机上的所有用户)
~/.gitconfig (当前用户)
/.git/config (当前项目) 
```



## 版本管理
```
git add
git commit 
git rm [文件名] 删除文件 

 1. 删除了一个文件
 2. 将被删除的文件纳入到暂存区( stage , index)
    若想恢复被删除的文件,需要进行两个动作
 a. git reset HEAD  [文件名] 将待删除的文件从缓存区恢复到工作区
 b. git checkout -- [文件名] 将工作区中的修改丢弃掉  



git rm --cache [文件名]  "从缓存区移除文件 ,和git add 相反"  
```
 
## 远程协作
```
git pull
git push
``` 
## 其他
使用 "git checkout -- <文件>..." 丢弃工作区的改动

## 重命名
 git mv [旧的文件名] [新的文件名]

## 修正commit 信息
git commit --amend -m "new message"

## 查看帮助信息
git help config
git config --help
man git-config
