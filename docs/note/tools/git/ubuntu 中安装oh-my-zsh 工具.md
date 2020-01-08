# ZSH

安装ZSH Shell
ZSH 已经被收录到了 Ubuntu 18.04 LTS 的官方软件包存储库中，安装起来也非常容易。使用如下命令就可以直接安装：
## 1. 安装zsh
```
sudo apt update
sudo apt install zsh
```
## 查看版本
ZSH Shell 安装好之后，可以使用如下命令查看其版本：
```
zsh --version
```

## 切换默认shell
```
sudo chsh -s $(which zsh)
```
设置zsh为默认shell
注销重新登录，再打开terminal：

## 查看是否切换成功
``` 
echo $SHELL
```
确认zsh是否是默认SHELL，如果是则会输出/usr/bin/zsh。


## 安装 Oh My ZSH
Git 安装好之后，请执行以下命令在 Ubuntu 18.04 LTS 系统中安装「Oh My ZSH」：

```shell 
    sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
