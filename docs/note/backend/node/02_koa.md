# koa

::: warning
还未解决的问题,没有去看怎么解决怎么默认处理 header  
:::

## koa  简单实现
<ShowCode>
<<< @/docs/code/koa/MyKoa.js
</ShowCode>

### context

<ShowCode>
<<< @/docs/code/koa/context.js
</ShowCode> 

### request

<ShowCode>
<<< @/docs/code/koa/request
</ShowCode> 

### response

<ShowCode>
<<< @/docs/code/koa/response.js
</ShowCode> 

## compose <Badge vertical='middle' text="核心" type="error"/>
> 洋葱模型的实现 - 中间件原理

>接收一个子元素为函数的数组,然后循环遍历该数组,  
如果该元素是一个函数,且拥有next() 参数  
就 return Promise(next) 否则 return Promise() 

<ShowCode>
<<< @/docs/code/koa/composeSample.js
</ShowCode>

## 插件
### koa-router
<ShowCode>
<<< @/docs/code/koa/router.js
</ShowCode>

### koa-static
<ShowCode>
<<< @/docs/code/koa/static.js
</ShowCode>
