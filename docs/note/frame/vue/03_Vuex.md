# Vuex

vuex的处理方式是同步在mutation里面,异步在actions里面，  
然后redux的同步就是reducer，异步更多的是用户自己去通过中间件(redux-thunk,redux-saga)的方式去实现的把。

Action 通过 store.dispatch 方法触发：
```javascript
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```
