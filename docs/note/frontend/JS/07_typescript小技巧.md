# typescript 梳理

::: tip  
转载自 [小生方勤公众号](https://mp.weixin.qq.com/s?__biz=Mzg5NDEyMzA2NQ==&mid=2247484931&idx=1&sn=b44589b042d46796ec2505d4c67487d4&chksm=c0252b55f752a2436f7f8bbd874d1533a6ce082186b2609191653b46334531a35e04de01b101&mpshare=1&scene=1&srcid=&sharer_sharetime=1585106081585&sharer_shareid=7d8efc094107e3bbbbf76e0291a6d431&key=f1cd74c6be685d9bdb12b713a6d11c3e378546c02bc196f3a289ff1d2bbb911af858081bd3852ead530a8bbe13fc1d8fdf42f9aecadd735451764d2bbfacd97604fa96d848f411fd95b4c98aa75c31b5&ascene=1&uin=MzE3OTEzODUxMA%3D%3D&devicetype=Windows+10&version=62080079&lang=zh_CN&exportkey=Az7fAZeaN%2BHSyWndV%2FeC1x0%3D&pass_ticket=VLZsCB1%2B5lOFE3KcJLH%2B8h3dUXKkaX7P1RrOAKbwLIUaxiyEF3PMqoUnS0Jotkbu)
这是一个非常优秀的公众号,值得关注
:::

「但是为什么我都会写 ts 了，却看不懂别人的代码呢？」 这！就是入门与进阶之隔。也是本文的目的所在。

首先推荐下 ts 的编译环境：typescriptlang.org

## 可索引类型

关于ts 的类型应该不用过多介绍了，「多用多记」 即可。介绍下关于 ts 的可索引类型。准确的说，这应该属于接口的一类范畴。说到接口（interface），我们都知道 **「ts 的核心原则之一就是对值所具有的结构进行类型检查。」** 它有时被称之为“鸭式辩型法”或“结构性子类型”。而接口就是其中的契约。可索引类型也是接口的一种表现形式，非常实用！

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
上面例子里，我们定义了`StringArray`接口，它具有索引签名。这个索引签名表示了当用number去索引`StringArray`时会得到string类型的返回值。Typescript支持两种索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。

这是因为当使用`number`来索引时，JavaScript会将它转换成`string`然后再去索引对象。也就是说用100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
```typescript
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
```

下面的例子里，name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：
```typescript
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```
当然，我们也可以将索引签名设置为只读，这样就可以防止给索引赋值
```typescript
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

## interface  和 type 关键字

stackoverflow 上的一个高赞回答还是非常赞的。typescript-interfaces-vs-types

`interface` 和 `type` 两个关键字的含义和功能都非常的接近。这里我们罗列下这两个主要的区别：

**interface：**

+ 同名的 interface 自动聚合，也可以跟同名的 class 自动聚合
+ 只能表示 object、class、function 类型

**type:**

+ 不仅仅能够表示 object、class、function
+ 不能重名（自然不存在同名聚合了），扩展已有的 type 需要创建新 type
+ 支持复杂的类型操作

举例说明下上面罗列的几点：

### Objects/Functions
都可以用来表示 `Object` 或者 `Function` ，只是语法上有些不同而已
```typescript
interface Point{
  x:number;
  y:number;
}

interface SetPoint{
  (x:number,y:number):void;
}
```
```typescript
type Point = {
  x:number;
  y:number;
}

type SetPoint = (x:number,y:number) =>void;
```
### 其他数据类型

与 `interface` 不同，`type` 还可以用来标书其他的类型，比如基本数据类型、元素、并集等
```typescript
type Name = string;

type PartialPointX = {x:number;};
type PartialPointY = {y:number;};

type PartialPoint = PartialPointX | PartialPointY;

type Data = [number,string,boolean];
```
### Extend

都可以被继承，但是语法上会有些不同。另外需要注意的是，**「interface 和 type 彼此并不互斥」**。

> interface extends interface
```typescript
interface PartialPointX {x:number;};
interface Point extends PartialPointX {y:number;};
```

> type extends type
```typescript
type PartialPointX = {x:number;};
type Point = PartialPointX & {y:number;};
```
> interface extends type

```typescript
type PartialPointX = {x:number;};
interface Point extends PartialPointX {y:number;};
```
> type extends interface
```typescript
interface ParticalPointX = {x:number;};

type Point = ParticalPointX & {y:number};
```
### implements

一个类，可以以完全相同的形式去实现`interface` 或者 `type`。但是，类和接口都被视为**静态蓝图（static blueprints）**，因此，他们不能实现/继承 联合类型的 `type`
```typescript
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x: 1;
  y: 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x: 1;
  y: 2;
}

type PartialPoint = { x: number; } | { y: number; };

// FIXME: can not implement a union type
class SomePartialPoint implements PartialPoint {
  x: 1;
  y: 2;
}
```
### 声明合并
和 `type` 不同，`interface` 可以被重复定义，并且会被自动聚合
```typescript
interface Point {x:number;};
interface Point {y:number;};

const point:Pint = {x:1,y:2};
```
### only interface can

在实际开发中，有的时候也会遇到 `interface` 能够表达，但是 `type` 做不到的情况：**「给函数挂载属性」**
```typescript
interface FuncWithAttachment {
  (param: string): boolean;
  someProperty: number;
}

const testFunc: FuncWithAttachment = function(param: string) {
  return param.indexOf("Neal") > -1;
};
const result = testFunc("Nealyang"); // 有类型提醒
testFunc.someProperty = 4;
```
## & 和 | 操作符
这里我们需要区分，**|** 和 **&** **并非位运算符**。我们可以理解为**&**表示必须同时满足所有的契约。**|**表示可以只满足一个契约。
```typescript
interface IA{
  a:string;
  b:string;
}

type TB{
  b:number;
  c:number [];
}

type TC = TA | TB;// TC 的 key，包含 ab 或者 bc 即可，当然，包含 bac 也可以
type TD = TA & TB;// TD 的 可以,必须包含 abc
```
## 交叉类型
交叉类型，我们可以理解为合并。其实就是**「将多个类型合并为一个类型」**。

```typescript
Man & WoMan
```

+ 同时是 Man 和 Woman
+ 同时拥有 Man 和 Woman 这两种类型的成员

```typescript
interface ObjectConstructor{
  assign<T,U>(target:T,source:U):T & U;
}
```
以上是 ts 的源码实现，下面我们再看一个我们日常使用中的例子
```typescript
interface A{
  name:string;
  age:number;
  sayName:(name:string)=>void
}

interface B{
  name:string;
  gender:string;
  sayGender:(gender:string)=>void
}

let a:A&B;

// 这是合法的
a.age
a.sayGender
```
注意：16446

```typescript
T & never = never
```

## extends
`extends` 即为扩展、继承。在 ts 中，**「extends 关键字既可以来扩展已有的类型，也可以对类型进行条件限定」**。在扩展已有类型时，不可以进行类型冲突的覆盖操作。例如，基类型中键`a`为`string`，在扩展出的类型中无法将其改为`number`。

```typescript
type num = {
  num:number;
}

interface IStrNum extends num {
  str:string;
}

// 与上面等价
type TStrNum = A & {
  str:string;
}
```
在 ts 中，我们还可以通过条件类型进行一些三目操作：`T extends U ? X : Y`
```typescript
type IsEqualType<A , B> = A extends B ? (B extends A ? true : false) : false;

type NumberEqualsToString = IsEqualType<number,string>; // false
type NumberEqualsToNumber = IsEqualType<number,number>; // true
```
## keyof

**「keyof 是索引类型操作符」**。用于获取一个“常量”的类型,这里的“常量”是指任何可以在编译期确定的东西，例如`const`、`function`、`class`等。它是从 **「实际运行代码」** 通向 **「类型系统」** 的单行道。理论上，任何运行时的符号名想要为类型系统所用，都要加上 typeof。

在使用`class`时，`class`名表示实例类型，`typeof class`表示 `class`本身类型。是的，这个关键字和 js 的 `typeof` 关键字重名了 。

假设 T 是一个类型，那么`keyof T`产生的类型就是 T 的属性名称字符串字面量类型构成的联合类型(联合类型比较简单，和交叉类型对立相似，这里就不做介绍了)。

**「注意！上述的 T 是数据类型，并非数据本身」。**

```typescript
interface IQZQD{
    cnName:string;
    age:number;
    author:string;
}
type ant = keyof IQZQD;
```
在 vscode 上，我们可以看到 ts 推断出来的 ant：

![推断声明](~@img/640.png)

注意，如果 T 是带有字符串索引的类型，那么`keyof T`是 `string`或者`number`类型。

索引签名参数类型必须为 "string" 或 "number"
```typescript
interface Map<T> {
  [key: string]: T;
}

//T[U]是索引访问操作符;U是一个属性名称。
let keys: keyof Map<number>; //string | number
let value: Map<number>['antzone'];//number
```
## 泛型

泛型可能是对于前端同学来说理解起来有点困难的知识点了。通常我们说，泛型就是指定一个表示类型的变量，用它来代替某个实际的类型用于编程，而后再通过实际运行或推导的类型来对其进行替换，以达到一段使用泛型程序可以实际适应不同类型的目的。说白了，「**泛型就是不预先确定的数据类型，具体的类型在使用的时候再确定的一种类型约束规范」。**

泛型可以应用于 `function`、`interface`、`type` 或者 `class` 中。但是注意，**「泛型不能应用于类的静态成员」**

几个简单的例子，先感受下泛型
```typescript
function log<T>(value: T): T {
    console.log(value);
    return value;
}

// 两种调用方式
log<string[]>(['a', ',b', 'c'])
log(['a', ',b', 'c'])
log('Nealyang')
```
泛型类型、泛型接口
```typescript
type Log = <T>(value: T) => T
let myLog: Log = log

interface Log<T> {
    (value: T): T
}
let myLog: Log<number> = log // 泛型约束了整个接口，实现的时候必须指定类型。如果不指定类型，就在定义的之后指定一个默认的类型
myLog(1)
```
**「我们也可以把泛型变量理解为函数的参数，只不过是另一个维度的参数，是代表类型而不是代表值的参数。」**

```typescript
class Log<T> { // 泛型不能应用于类的静态成员
    run(value: T) {
        console.log(value)
        return value
    }
}

let log1 = new Log<number>() //实例化的时候可以显示的传入泛型的类型
log1.run(1)
let log2 = new Log()
log2.run({ a: 1 }) //也可以不传入类型参数，当不指定的时候，value 的值就可以是任意的值
```
类型约束，需预定义一个接口
```typescript
interface Length {
    length: number
}
function logAdvance<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}

// 输入的参数不管是什么类型，都必须具有 length 属性
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })
```
泛型的好处：

+ 函数和类可以轻松的支持多种类型，增强程序的扩展性

+ 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性

+ 灵活控制类型之间的约束


泛型，在 ts 内部也都是非常常用的，尤其是对于容器类非常常用。而对于我们，还是要多使用，多思考的，这样才会有更加深刻的体会。同时也对塑造我们类型思维非常的有帮助。

### 小试牛刀
```typescript
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name', 'name', 'name']); //["Jarid", "Jarid", "Jarid"]
```
所谓的小试牛刀，就是结合上面我们说的那几个点，分析下`pluck`方法的意思

+ `<T, K extends keyof T>`约束了这是一个泛型函数
  + `keyof T` 就是取 `T` 中的所有的常量 `key`（这个例子的调用中）,即为：`"name" | "age"`
  + `K extends keyof Person` 即为 `K` 是 `"name" or "age"`
+ 结合以上泛型解释，再看形参
  + `K[]` 即为 只能包含`"name"` or `"age"`的数组
+ 再看返回值
  + `T[K][]` 后面的`[]`是数组的意思。而 `T[K]`就是去对象的 T 下的`key`: `K`的

## infer

infer 关键字最早出现在 PR 里面，**「表示在 extends 条件语句中待推断的类型变量」**

是在 ts2.8 引入的，在条件判断语句中，该关键字用于**「替换手动获取类型」**。

```
type PramType<T> = T extends (param : infer p) => any ? p : T;
```

在上面的条件语句中，`infer P` 表示待推断的函数参数，如果`T`能赋值给`(param : infer p) => any`,则结果是`(param: infer P) => any`类型中的参数 `P`,否则为`T`.

```typescript
interface INealyang{
  name:'Nealyang';
  age:'25';
}

type Func = (user:INealyang) =>void;

type Param = ParamType<Func>; // Param = INealyang
type Test = ParamType<string>; // string
```
## 工具泛型

所谓的工具泛型，其实就是泛型的一些语法糖的实现。完全也是可以自己的写的。我们也可以在`lib.d.ts`中找到他们的定义

### Partial

`Partial`的作用就是将传入的属性变为可选。

由于 `keyof` 关键字已经介绍了。其实就是可以用来取得一个对象接口的所有 key 值。在介绍 `Partial` 之前，我们再介绍下 `in` 操作符:

```typescript
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }
```
然后再看 Partial 的实现：
```typescript
type Partial<T> = { [P in keyof T]?: T[P] };
```
翻译一下就是`keyof T` 拿到 `T` 所有属性名, 然后 `in` 进行遍历, 将值赋给 `P`, 最后 `T[P]` 取得相应属性的值,然后配合`?:`改为可选。

### Required
`Required` 的作用是将传入的属性变为必选项, 源码如下

```typescript
type Required<T> = { [P in keyof T]-?: T[P] };
```
### Readonly
该类型可以将 `K` 中所有的属性的值转化为 `T` 类型，源码实现如下：
```typescript
type Readonly<T> = { readonly [P in keyof T]: T[P] };
```
### Record
该类型可以将 `K` 中所有的属性的值转化为 `T` 类型，源码实现如下：
```typescript
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
````
可以根据 K 中的所有可能值来设置 key，以及 value 的类型，举个例子：
```typescript
type T11 = Record<'a' | 'b' | 'c', Person>; // -> { a: Person; b: Person; c: Person; }
```
### Pick

可以根据 `K` 中的所有可能值来设置 `key`，以及 `value` 的类型，举个例子：
```typescript
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```
### Exclude
Exclude 将某个类型中属于另一个的类型移除掉。
```typescript
/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
```
以上语句的意思就是 如果 T 能赋值给 U 类型的话，那么就会返回 never 类型，否则返回 T，最终结果是将 T 中的某些属于 U 的类型移除掉

举个栗子：
```typescript
type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;  // -> 'b' | 'd'
```
可以看到 T 是` 'a' | 'b' | 'c' | 'd' `，然后 U 是` 'a' | 'c' | 'f' `，返回的新类型就可以将 U 中的类型给移除掉，也就是` 'b' | 'd' `了。

### Extract

Extract 的作用是提取出 T 包含在 U 中的元素，换种更加贴近语义的说法就是从 T 中提取出 U，源码如下：
```typescript
/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;
```
Demo:
```typescript
type T01 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;  // -> 'a' | 'c'
```
### Omit
Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能, 源码如下:
```typescript
/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```
Demo:
```typescript
// 使用
type Foo = Omit<{name: string, age: number}, 'name'> // -> { age: number }
```
更多工具泛型

其实常用的工具泛型大概就是我上面介绍的几种。更多的工具泛型，可以通过查看 `lib.es5.d.ts`里面查看。

## 类型断言

断言这种东西还是少用。。。。不多对于初学者，估计最快熟练掌握的就是类型断言了。毕竟 「any 大法好」

Typescript 允许我们覆盖它的推断（毕竟代码使我们自己写的），然后根据我们自定义的类型去分析它。这种机制，我们称之为 「类型断言」
```typescript
const nealyang = {};
nealyang.enName = 'Nealyang'; // Error: 'enName' 属性不存在于 ‘{}’
nealyang.cnName = '一凨'; // Error: 'cnName' 属性不存在于 '{}'
interface INealyang = {
  enName:string;
  cnName：string;
}
```
```typescript
const nealyang = {} as INealyang; // const nealyang = <INealyang>{};
nealyang.enName = 'Nealyang';
nealyang.cnName = '一凨';
```
类型断言比较简单，其实就是“纠正”ts对类型的判断,当然，是不是纠正就看你自己的了。

需要注意一下两点即可：

+ 推荐类型断言的预发使用 as关键字，而不是<> ,防止歧义
+ 类型断言并非类型转换，类型断言发生在编译阶段。类型转换发生在运行时

## 函数重载
在我刚开始使用 ts 的时候，我一直困惑。。。为什么会有函数重载这么鸡肋的写法，可选参数它不香么？

慢慢你品
函数重载的基本语法：
```typescript
declarefunction test(a: number): number;
declarefunction test(a: string): string;

const resS = test('Hello World');  // resS 被推断出类型为 string；
const resN = test(1234);           // resN 被推断出类型为 number;
```
这里我们申明了两次？！为什么我不能判断类型或者可选参数呢？后来我遇到这么一个场景，
```typescript
interface User {
  name: string;
  age: number;
}

declarefunction test(para: User | number, flag?: boolean): number;
```
在这个 test 函数里，我们的本意可能是当传入参数 para 是 User 时，不传 flag，当传入 para 是 number 时，传入 flag。TypeScript 并不知道这些，当你传入 para 为 User 时，flag 同样允许你传入：
```typescript
const user = {
  name: 'Jack',
  age: 666
}

// 没有报错，但是与想法违背
const res = test(user, false);
```
使用函数重载能帮助我们实现：
```typescript
interface User {
  name: string;
  age: number;
}

declarefunction test(para: User): number;
declarefunction test(para: number, flag: boolean): number;

const user = {
  name: 'Jack',
  age: 666
};

// bingo
// Error: 参数不匹配
const res = test(user, false);
```
