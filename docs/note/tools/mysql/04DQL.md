# DQL 查询
## 基础查询

* select * from表名
1. 语法
    * select 字段列表
    * from 表名列表
    * where 条件列表
    * group by 分组字段
    * having 分组之后的条件
    * order by 排序
    * limit 分页限定
2. 基础查询
    1. 多个字段的查询
        select字段名1，字段名2... from 表名；
        * 注意：
        * 如果查询所有字段，则可以使用 * 来替代字段列表。
    2. 去除重复：
        * distinct
    3. 计算列
        * 一般可以使用四则运算计算一些列的值。（一般只会进行数值型的计算）
        * IFNULL（表达式1，表达式2）：null参与的运算，计算结果都为null
        * 表达式1：哪个字段需要判断是否为null
        * 如果该字段为nul1后的替换值。
    4. 起别名：
        * as: as也可以省略
        
3. 条件查询
    1. where子句后跟条件
    2 .运算符
    * `>、<、<=、>=、=、<>`
    * BETWEEN...AND
    * IN（集合）
    * LIKE : 模糊查询
        * _ 任意一个字符
        * % 任意多个字符
    * IS NULL
    * and 或 &&
    * or 或 ||
    * not 或 !
```text
    --查询年龄大于20岁                                                                                                                                                                              >
    SELECT * FROM student WHERE age > 20;
    SELECT * FROM student WHERE age >= 20;
    
    --查询年龄等于20岁
    SELECT * FROM student WHERE age = 20;
    --查询年龄等于22 18 25 岁
    SELECT * FROM student WHERE age IN ( 22，18，25)；
    --查询英语成绩为 null
    SELECT * FROM student WHERE english=NULL；--不对的。
    null 值不能使用=（！=）判断
    SELECT * FROM student WHERE english IS NULL；
    --查询英语成绩不为 null
    SELECT * FROM student WHERE english IS NOT NULL；
    
    -查询姓马的有哪些？
    SELECT * FROM student WHERE NAME LIKE'马%'；
    -查询姓名第二个字是化的人
    SELECT * FROM student WHERE NAME LIKE "_化%"；
    --查询姓名是3个字的人
    SELECT * FROM student WHERE NAME LIKE "___"；
    --查询姓名中包含德的人
    SELECT * FROM student WHERE NAME LIKE %德%'；
```