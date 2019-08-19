# Redux-thunk
## actionCreator
```js
import * as AT from "./actionTypes";
import axios from 'axios'

const change_input_value = (value) => ({type: AT.CHANGE, value});
const add_item = () => ({type: AT.ADD});
const delete_item = (index) => ({type: AT.DELETE, index});
const init_list = (data) => ({type: AT.INIT, data});

const getlist = () => {
    return (dispatch) => {
        let url = "https://easy-mock.com/mock/5d5ac2129456f51c8e005a97/example/initlist"
        axios.get(url).then(res => {
            console.log(res.data);
            const action = init_list(res.data);
            dispatch(action)
        })
    }
};
export {
    change_input_value, add_item, delete_item, getlist
}
```
## actionTypes
```js
const CHANGE = "change_input_value";
const ADD = "add_input_value";
const DELETE = "delete_item";
const INIT = "init_list";
export {
    INIT,
    CHANGE,
    ADD,
    DELETE
}

```
## reducer
```js
import * as AT from './actionTypes'

const defaultState = {
    inputValue: "",
    list: [],
};

export default (state = defaultState, action) => {
    let newState = JSON.parse((JSON.stringify(state)));
    switch (action.type) {
        case AT.INIT:
            return action.data;
        case AT.CHANGE:
            newState.inputValue = action.value;
            return newState;
        case AT.ADD:
            newState.list = [...newState.list, newState.inputValue];
            newState.inputValue = "";
            return newState;
        case AT.DELETE:
            newState.list.splice(action.index, 1);
            return newState;
        default :
            return state;
    }
}
```
## redux-thunk 中间件
```js
import {createStore, applyMiddleware, compose} from "redux"
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(reducer, enhancer);
export default store;

```
