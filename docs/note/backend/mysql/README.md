# 数据库



## 安装

> mysql 8.0以上版本 windows 安装

```bash
Microsoft Windows [版本 10.0.15063]
(c) 2017 Microsoft Corporation。保留所有权利。

C:\Windows\system32>cd C:\Develop\mysql\bin

C:\Develop\mysql\bin>mysqld --initialize --user=mysql --console
2019-11-29T05:52:34.939856Z 0 [System] [MY-013169] [Server] C:\Develop\mysql\bin\mysqld.exe (mysqld 8.0.18) initializing of server in progress as process 5724
2019-11-29T05:52:38.690494Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: iBpi9%IUS&ju

C:\Develop\mysql\bin>mysqld --install
Service successfully installed.

C:\Develop\mysql\bin>net start MySQL
MySQL 服务正在启动 .
MySQL 服务已经启动成功。

C:\Develop\mysql\bin>mysql -u root -p
Enter password: ************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.18

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> set password for root@localhost = password('123456');
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'password('123456')' at line 1
mysql> ALTER USER "root"@"localhost" IDENTIFIED  BY "123456";
Query OK, 0 rows affected (0.02 sec)

mysql> exit;
Bye

C:\Develop\mysql\bin>mysql -u root -p
Enter password: ******
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.18 MySQL Community Server - GPL

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql> exit;
Bye

C:\Develop\mysql\bin>
```



## mysql 访问

- 客户端访问服务端
  - 利用 Windows控制台访问( MySQL客户端)
  - 利用数据库管理工具( Navicat)
- 客户端需要连接认证
  - -h:主机地址(本机 localhost可以省略)
  - -P:端口号(默认3306可以省略)
  - -u:用户名
  - -p:用户密码

> **mysql.exe -hlocalhost -P3306 -uroot -proot**



## 版本代号说明

1. MySQL Community Server 社区版本，开源免费，但不提供官方技术支持。
2. MySQL Enterprise Edition 企业版本，需付费，可以试用30天。
3. MySQL Cluster 集群版，开源免费。可将几个MySQL Server封装成一个Server。
4. MySQL Cluster CGE 高级集群版，需付费。
5. MySQL Workbench (GUITOOL)一款专为MySQL设计的ER/数据库建模工具。它是著名的数据库设计工具DBDesigner4的继任者。MySQLWorkbench又分为两个版本，分别是社区版（MySQL Workbench OSS）、商用版（MySQL WorkbenchSE）。
6. Generally Available（GA）Release，GA是指软件的通用版本，一般指正式发布的版本。
7. "essentials" 是指精简版，不包含 embedded server and benchmarksuite，有自动安装程序和配置向导，没有MySQL文档。
8. "noinstall" 是指非安装的压缩包的。包含 embedded server and benchmarksuite，没有自动安装程序和配置向导，需手动安装配置，有MySQL文档。

## SQL语言

> SQL根据操作不同,分为几类

- DPL: Data Query Language,数据查询语言,用于查询和检索数据
- DML: Data Manipulation Language,数据操作语言,用于数据的写操作(增删改)
- DDL: Data Definition Language,数据定义语言,用于创建数据结构
- DCL: Data Control Language,数据控制语言,用于用户权限管理
- TPL: Transaction Process Language,事务处理语言,辅助DML进行事务操作(因此也归属于DML)