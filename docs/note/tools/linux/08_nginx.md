# nginx

172.17.0.2

## 概念

### 什么是nginx

是一个高性能的 HTTP 和 反向代理服务器, 特点是占用少,并发能力强 ,理想状态下,单个nginx服务可支持5万个并发数

### 反向代理

> 正向代理 : 在客户端 配置代理服务器, 通过代理服务器进行互联网访问
>
> 反向代理 : 只对用户暴露代理服务器,隐藏资源服务器,通过代理服务器获取资源

### 负载均衡

![1581401504217](C:\Users\程燚\AppData\Roaming\Typora\typora-user-images\1581401504217.png)

### 动静分离

![1581401808648](C:\Users\程燚\AppData\Roaming\Typora\typora-user-images\1581401808648.png)

### 高可用

##  安装

依赖安装

```shell
# 编译依赖gcc环境，如果没有gcc环境，
yum install gcc-c++

# nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库。
yum install -y pcre pcre-devel

# nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。
yum install -y zlib zlib-devel

# OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，
# 并提供丰富的应用程序供测试或其它目的使用。
# nginx不仅支持http协议，还支持https（即在ssl协议上传输http），所以需要在linux安装openssl库。
yum install -y openssl openssl-devel

# 可以合并安装
yum -y install make pcre pcre-devel zlib zlib-devel gcc-c++ libtool openssl openssl-devel

# 安装 nginx

yum -y install wget
wget  http://nginx.org/download/nginx-1.17.6.tar.gz
# 解压
tar -zxvf /usr/local/tarzip/nginx-1.17.6.tar.gz -C /usr/local/software/nginx
# 检查包的完整性 编译 安装
./configure && make && make install
# 最后在 下面的目录中会出现一个 nginx 的可执行文件
/usr/local/nginx/sbin
```

> 启动nginx 并 查看进程

![1581405773978](C:\Users\程燚\AppData\Roaming\Typora\typora-user-images\1581405773978.png)

## nginx配置

> /usr/local/nginx/conf/nginx.conf  配置文件

### 防火墙

```shell
# 安装防火墙
yum install firewalld
# 查看开放的端口
firewall-cmd --list-all
# 开放新端口
sudo firewall-cmd --add-port=80/tcp --permanent
# 重启防火墙
sudo firewall-cmd --reload
```

### nginx 常用命令

```bash
# 使用 nginx 命令需要切换到 /usr/local/nginx/sbin 目录下
# 版本号
./nginx -v
# 停止
./nginx -s stop 强制退出
./nginx -s quit 普通退出 
# 启动
./nginx
# 重载(热部署) 用于重新加载配置文件 nginx.conf
./nginx -s reload
```

## nginx 配置文件

nginx配置文件组成

### 全局块

从配置文件开始到 events块之间的内容,主要会设置一些影响 ngInx服务器整体运行的配置指令
比如 worker__ processes1; worker_processes值越大,可以支持的并发处理量也越多

### events 块

events块涉及的指令主要影响 Nginx服务器与用户的网络连接
比如 worker connections 1024;支持的最大连接数

### http 块

Nginx服器配置中改动最频繁的部分,http块可以括http全局块, server块

### 反向代理

![1581432482828](C:\Users\程燚\AppData\Roaming\Typora\typora-user-images\1581432482828.png)

![1581432683726](C:\Users\程燚\AppData\Roaming\Typora\typora-user-images\1581432683726.png)



```markdown

```



`=`	用于不含正则表达式的uri前,要求请求字符串与uri严格匹配,如果匹配成功,就停止继续向下搜索并立即处理该请求。
`~ `	用于表示uri包含正则表达式,并且区分大小写。

`~*`	用于表示uri包含正则表达式,并且不区分大小写。

`^~`	用于不含正则表达式的uri前,要求 Nginx服务器找到标识uri和请求字符串匹配度最高的location后,立即使用此location处理请求,而不再使用location块中的正则uri和请求字符串做匹配。

注意:如果uri包含正则表达式,则必须要有		`~`	或者	`~*`	标识

---

日志文件位置：/var/log/nginx
配置文件位置：/etc/nginx
资源存放位置：/usr/share/nginx/html

```
docker stop `docker ps -aq --filter name=nginx` 
```

```
docker run --name mynginx -d -p 8000:80 \
  -v $PWD/log:/var/log/nginx \
  -v $PWD/config:/etc/nginx \
  -v $PWD/html:/usr/share/nginx/html \
  nginx
```

```
docker run --name nginx_erp_test -d -p 80:80
-v /www/html/attachment:/www/html/attachment 
-v /data/nginx/html:/usr/share/nginx/html 
-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  
-v /data/nginx/logs:/var/log/nginx 
-v /data/nginx/conf.d:/etc/nginx/conf.d
nginx
```

```
docker run -d \ # -d 后台运行
-v /data/mysql/data:/var/lib/mysql \ #挂载本地data目录到 容器中的位置 mysql
-p 3306:3306 \  #指定容器端口映射到本机端口3306
-e MARIADB_USRE=root \ #设置环境变量用户名
-e MARIADB_PASS=123456 \ #设置环境变量密码
--name mymariadb \ #指定容器名字为mymariadb
mariadb 
```

