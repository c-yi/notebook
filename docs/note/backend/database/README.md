# 数据库

## 分类
 > 文件型: 简单 - access,sqlite
 >
 > 关系型: MySQL, Oracle
 >
 > 分布式: mongoDB
 >
 > NoSQL: memcache, redis

## 安全性 

# 基本操作
## 增
```mysql
INSERT INTO user_table (`字段名1`,`字段名2`) VALUES ('值1','值2');
```
## 删

```mysql
DELETE FROM user_table WHERE id=1;
```
## 改
```mysql
UPDATE user_table SET 字段=值,字段=值 WHERE id =1;
```
## 查
```mysql
SELECT 字段 FROM user_table WHERE id=1;
```
