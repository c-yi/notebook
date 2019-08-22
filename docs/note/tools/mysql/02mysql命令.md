# MySql命令

*注意*
> 数据库不区分大小写,关键字建议大写;

## 打开服务窗口
services.msc
## 启动/关闭 mysql服务
net start mysql;
net stop mysql;

## 连接数据库
MySQL -u<用户名> -<密码>;
MySQL -uRoot -p123456;

## 远程连接数据库
mysql -h127.0.0.1 -uRoot -p123456

## 退出
exit;
quit;

## 注释
* 单行注释
    * ` -- ` mysql语句注释
    * `#` mysql语句特有的注释
* 多行注释
    * `/* 多行注释 */`