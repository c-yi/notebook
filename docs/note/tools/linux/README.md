# linux

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



# e.g.

     -c --stdout --to-stdout 结果写到标准输出，原文件保持不变
     -d --decompress --uncompress 解压
     -k --keep 压缩或者解压过程中，保留原文件
     -r --recursive
     -t --test 检查压缩文件的完整性
     -v --verbose 显示每个文件的名子和压缩率
     -# --fast --best 取值从-1(最快)到-9(最好)，默认是-6
