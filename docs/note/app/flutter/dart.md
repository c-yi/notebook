# 基础语法

## 变量/常量
:::tip
 var final const 
:::
### var

```dart
 var hello = '你好 dart'; // 變量,可修改
     hello = '不好';
``` 
### const 与 final


```dart
final c = 3; // 正确
const d = 4; // 正确 

final c = new DateTime.now(); // 正确
const d = new DateTime.now(); // 错误 
``` 
> final是运行时的常量,惰性初始化,可以开始时不赋值,在运行第一次前,才开始赋值

## 数据类型
基本数据类型
:::tip 
string bool int float list(数组/集合) 
:::
### 字符串
```dart
var a ='this is dart';
var b ="this is dart";
var a ="""  this 
            is
            dart
            """;
```
#### 拼接
```dart
var aa ='this is dart';
var bb ="this is dart";

print("$aa $bb");
print(aa + " " + bb);
```
### 整型/浮点型
```dart
int n1 = 123;
float n2 =123; 
float n3 =123.123;
// int 必须是整型
// float 可以是整型,也可以是浮点型
```
### bool
```dart
bool flag1 = true;
bool flag2 = false;

```
## 定义list时指定类型
```dart
var l2 = new List<int>();
l2.addAll([1, 23, 5]); print(l2);

//定义list时指定类型 
var l3 = new List<String>(); 
l3.addAll(['你好', 'dart']);
print(l3); // maps 类型 var
person = { "name": "张三", "age": 13, "job": ['骄傲', 0, "阿萨德"] };
print(person);
print(person["name"]);
print(person["job"]);
```
## 运算符
```dart
var a=1; 
var b=2;
print('数值运算符');
print(a + b); // 加 print(a - b);
// 减 print(a * b); // 乘 print(a / b); // 除 print(a % b); // 取余
print(a ~/ b); // 取整/ /
```
## 关系运算符
 ```dart
var a=1; 
var b=2;
print(a > b); // 大于
print(a >= b); // 大于等于
print(a == b); // 等于
print(a <= b); // 小于等于
print(a < b); // 小于
print(a != b); // 不等于
```
## 逻辑运算符
```dart
var flag1 = true;
var flag2 = true;
print(!flag1);
print(flag1 || flag2);
print(!flag1 && flag2);
```
  
```dart
print("赋值运算符 = ??=,如果为空,则赋值");
String g;
g ??= '5';
print(g);
```