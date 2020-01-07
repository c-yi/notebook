# immutable
## immutable
> `npm install immutable`
> 
> 保证 store中的数据不被变更,将store中的数据转化成immutable对象
```jsx harmony
import * as AT from "./actionTypes"
import {fromJS} from "immutable"

const defaultState = fromJS({
    focus: false
});
const HeaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AT.HAS_FOCUS:
            return state.set('focus', true);
        case AT.LOSE_FOCUS:
            return state.set('focus', false);
        default:
            return state;
    }

};
export default HeaderReducer;

```
##　redux-immutable 
这个库是保证store中获取的数据类型统一 
> `npm install redux-immutable`