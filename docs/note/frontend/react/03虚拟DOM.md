# 虚拟DOM

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合 ,生成真是的 DOM, 来显示
```html
<div id="abc"><span>hello world</span></div>
```
4. 生成虚拟 DOM (虚拟 DOM 就是一个 JS 对象,用来描述真实 DOM )(损耗率性能)
```js
let DOM =['div',{id:'abc'},['span',{},'hello world']];
```
5. state 数据发生变化
6. 数据 + 模板 生成新的虚拟 DOM (极大地提升了性能)
```js
let DOM =['div',{id:'abc'},['span',{},'bye bye']];
```
7. 比较原始虚拟 DOM 和新的虚拟 DOM 的区别,找到区别是 span 中的内容(极大提升了性能)
8. 直接操作原始 DOM 改变 span 中的内容