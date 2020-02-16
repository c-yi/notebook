# linux

## 启动软件并设置开机启动

```bash
systemctl enable nginx
systemctl start nginx
```

## 解压

> tar -zvxf 压缩文件 -c 解压目录

Linux下常见的压缩包格式有5种:  **zip** **tar.gz** **tar.bz2** **tar.xz** **tar.Z**

其中zxvf含义分别如下

z: 　　g**z**ip  　　　　　　　　    压缩格式

x: 　　e**x**tract　　　　　　　　  解压

v:　　 **v**erbose　　　　　　　　详细信息

f: 　　**f**ile(file=archieve)　　　　文件

关于tar的详细命令可以

```bash
tar --help
```

**事实上, 从1.15版本开始tar就可以自动识别压缩的格式,故不需人为区分压缩格式就能正确解压**

```bash
tar -xvf filename.tar.gz
tar -xvf filename.tar.bz2
tar -xvf filename.tar.xz
tar -xvf filename.tar.Z
```



## e.g.

```bash
 -c --stdout --to-stdout 结果写到标准输出，原文件保持不变
 -d --decompress --uncompress 解压
 -k --keep 压缩或者解压过程中，保留原文件
 -r --recursive
 -t --test 检查压缩文件的完整性
 -v --verbose 显示每个文件的名子和压缩率
 -# --fast --best 取值从-1(最快)到-9(最好)，默认是-6
```

## 文件操作

### 新建：

```bash
    新建文件夹使用：mkdir命令，mkdir是“make directory”的缩写词。

    mkdir是一个用来在linux系统下创建目录的命令，此命令属于内建命令。

    例如：mkdir abc，当前你在哪个目录下，就创建在哪个目录下，如果使用mkdir /data/wwwroot/abc的话，该abc目录就创建在wwwroot文件夹下。
```

### 复制：

```bash
     复制文件以及文件夹实例：命令格式：cp [-adfilprsu] 源文件(source) 目标文件(destination)
          cp [option] source1 source2 source3 ...  directory
          参数说明：
            -a:是指archive的意思，也说是指复制所有的目录
            -d:若源文件为连接文件(link file)，则复制连接文件属性而非文件本身
            -f:强制(force)，若有重复或其它疑问时，不会询问用户，而强制复制
            -i:若目标文件(destination)已存在，在覆盖时会先询问是否真的操作
            -l:建立硬连接(hard link)的连接文件，而非复制文件本身
            -p:与文件的属性一起复制，而非使用默认属性
            -r:递归复制，用于目录的复制操作
            -s:复制成符号连接文件(symbolic link)，即“快捷方式”文件
            -u:若目标文件比源文件旧，更新目标文件
            如将/test1目录下的file1复制到/test3目录，并将文件名改为file2,可输入以下命令：
                  cp /test1/file1 /test3/file2
```



### 移动：

```bash
             命令格式：mv [-fiv] source destination
             参数说明：
             -f:force，强制直接移动而不询问
             -i:若目标文件(destination)已经存在，就会询问是否覆盖
             -u:若目标文件已经存在，且源文件比较新，才会更新
             如将/test1目录下的file1复制到/test3 目录，并将文件名改为file2,可输入以下命令：
             mv /test1/file1 /test3/file2
```

### 删除：

```bash
      删除文件夹实例：

      rm -rf /var/log/httpd/access
      将会删除/var/log/httpd/access目录以及其下所有文件、文件夹

      删除文件使用实例：
      rm -f /var/log/httpd/access.log
      将会强制删除/var/log/httpd/access.log这个文件
```

## 进程

1. 查看进程
   ps -ef | grep tomcat
2. 结束进程
   kill -9 2982

## 端口号

```bash
# 查看某一端口的占用情况
lsof -i:端口号
# 会显示所有端口和所有对应的程序
netstat -tunlp |grep 22
# netstat -anp 显示系统端口使用情况
netstat -anp|grep 80
```