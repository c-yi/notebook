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



