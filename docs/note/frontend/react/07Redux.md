# redux
## 创建store
> store
```js

import {createStore} from "redux"
import reducer from './reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
```

> reducer
```js

const defaultState = {
    inputValue: "初始值",
    list: ["待办事项1", "待办事项2", "待办事项3"],
};

export default (state = defaultState, action) => {
    return state;
}

// reducer
```
```jsx harmony
this.state = store.getState();
// 订阅store ,如果 store 发生改变,数据就会更新
store.subscribe(() => {
    this.setState(store.getState())
});
```