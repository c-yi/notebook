# 数据库操作分类
## 分类
* DDL ( 操作数据库,表 )
    * DDL(Data Definition Language)数据定义语言     
    * 用来定义数据库对象：数据库，表，列等。关键字.create,drop,alter等
* DML ( 增删改数据库中的数据 )
    * DML(Data Manipulation Language)数据操信话营部
    * 用来对数据库中表的数据进行增时改。关健字insert,delete,update等
* DQL ( 查询表中的数据 )
    * DQL(Data Query Language)数据查询语言
    * 用来查询数据库中表的记录（数据）。关键字：select,where等
* DCL ( 授权 )
    * DCL(Data Control Language)数据控制语言（了解）
    * 用来定义数据库的访问校限和安全级别，及创建用户。关键字：GRANT REVOKE等
    
## DDL ( 操作数据库,表 )
### 操作数据库 CRUD
1. C(create) : 创建
    * 创建数据库 `create database db1`; 
    * 创建数据库判断是否存 `create database if not exists db1`;
    * 创建数据库并指定字符集 `create database character set gbk`;
    * 创建数据库判断是否存并指定字符集 `create database if not exists db3 character set gbk`;
2. R(Retrieve) : 查询
    * 查询所有数据库 `show databases`;
    * 查询数据库信息 `show create database db1`;
3. U(update) : 修改
    * 修改数据库字符集 `alter database 数据库名称 character set 字符集名`称 
4. D(delete) : 删除
    * 删除数据库: `drop database 数据库名称`;
    * 数据库如果存在则删除: `drop database if exists 数据库名称`;
5. 使用数据库
    * 查询当前正在使用的数据库名称 `select database()`;
    * 使用数据库 `use 数据库名称`;
### 操作数据表 CRUD
1. C(create) : 创建
    * 创建表 create table 表名(
            字段名1 数据类型,
            字段名2 数据类型,
            字段名3 数据类型
        ); 
        ```text
              create table users(
                  id int,
                  age int ,
                  name varchar(20),
                  score double(4,1),
                  birthday date,
                  inset_time timestamp);
        ```
        最后一行不需要加 ,
2. R(Retrieve) : 查询
    * 查询数据库中所有表 `show tables`;
    * 查询表结构 `desc(description) 表名`;
3. U(update) : 修改
    * 修改表名 `alter table 表名 rename to 新表名` ;
    * 修改表的字符集 `alter table 表名称 character set 字符集名称` 
    * 添加字段 `alter table 表名 add 字段名 数据类型`;
    * 修改字段名和数据类型 `alter table 表名 change 旧的字段名 新字段名 新数据类型`;
                         `alter table 表名 modify 字段名 新数据类型`;
    * 删除字段 `alter table 表名 drop 字段名` ;
4. D(delete) : 删除
    * 删除表: `drop table 表名称`;
    * 表如果存在则删除: `drop table if exists 表名称`;
5. 使用表
    * 查询当前正在使用的表名称 `select tables()`;
    * 使用表 use 表名称;


##DML：增时改表中数据
1. 添加数据：
    * 语法：`insert into 委名（列名1，列名2.….列名）values(值1，值2.….值n)`;
    * 注意：
        1. 列名和值要一一对应。
        2. 如果表名后，不定义列名，则默认给所有列添加值
            insert into 表名 values(值1，值2，...值n)；
        3. 除了数字类型，其他类型需要使用引号（单双都可以)引起来
2. 删除数据：
    * 语法：`delete from 表名 [ where 条件 ]`
    * 注意：
    1. 如果不加条件，则删除表中所有记录。
    2. 如果要删除所有记录
        1. delete from 表名；-不推荐使用。有多少条记录就会执行多少次删除操作
        2. TRUNCATE TABLE 表名；-推荐使用，效率更高先删除表，然后再创建一张一样的表。
3. 修改数据：
    * 语法：`update 表名 set 列名1=值1，列名2=值2,I.. [Where 条件]`