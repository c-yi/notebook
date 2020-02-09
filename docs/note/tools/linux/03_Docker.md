---

typora-copy-images-to: ..\..\..\.vuepress\public\image
typora-root-url: ..\..\..\.vuepress\public\image
---

# 安装docker环境

```powershell
# 1. 卸载旧版本的docker
   sudo apt-get remove docker docker-engine docker.io containerd runc
# 2. 更新APT的源  
   sudo apt-get update 
# 3. 安装 apt 依赖包，用于通过HTTPS来获取仓库:

  sudo apt-get install \
       apt-transport-https \
       ca-certificates \
       curl \
       gnupg-agent \
       software-properties-common

# 4. 添加 Docker 的官方 GPG 密钥：
   $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   # 验证您现在是否拥有带有指纹的密钥
   sudo apt-key fingerprint 0EBFCD88
   
# 5. 使用以下指令设置稳定版仓库

  sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# 6. 更新APT的源
   sudo apt-get update

# 7. 安装
   sudo apt-get install docker-ce docker-ce-cli containerd.io

# 8. 创建 docker 组,并将当前用户添加进改组
   sudo groupadd docker
   sudo usermod -aG docker ${USER}

# 9. 配置阿里云镜像加速服务
   sudo systemctl daemon-reload
   sudo systemctl restart docker
```

 ![1581259553993](/1581259553993.png)




### 其他安装命令
> 1. 查看可安装的Docker版本： 
>       apt-cache madison docker-engine
> 2. 查看是否安装成功：
>       sudo docker --version

# docker 命令

## 镜像

```powershell
# 拉取镜像 
docker pull  ${imagesName:version} 指定版本,如果不指定版本,默认拉取最新版本 

# 搜索镜像 
docker search ${imageName}

# 删除镜像 
docker rmi 名称/id 删除多个中间加一个空格

# 列出镜像 
docker images 
```



![1581257928702](/1581257928702.png)



## 容器

> 创建交互式容器

```powershell
docker run -i -t --name =c1 centos /bin/bash
或
docker run -it --name  c1 centos /bin/bash

# -i				交互式容器
# -t	 			tty终端 ( 分配一个终端,操作容器 )
# --name 			指定容器的名称(唯一不能重复)
# /bin/bash			放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash

# 退出交互式容器终端，直接输入 
exit
```

> 创建守护式容器 -后台运行

```powershell
docker run -itd --name =c2 centos /bin/bash

# 进入容器
docker attach
docker exec 
# docker exec -it 容器名称 /bin/bash
# 推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。
```

## 查看 容器

```powershell
# 查看正在运行的容器
docker ps
# 查看运行过的容器 ( 历史 )
docker ps -a
# 查看最后一次运行的容器
docker ps -l
```

## 启动/停止容器

```
# 启动
docker start name/id
# 重启
docker restart name/id
# 停止
docker stop name/id
```

查看容器的详细信息

docker inspect 容器名称/id

