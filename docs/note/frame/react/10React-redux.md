# React-redux

## 实例
```jsx harmony
import React, {Component, Fragment} from 'react'
import Item from "./Item";
import * as AC from "../store/actionCreator"
import {connect} from "react-redux"

class TodoList extends Component {

    constructor(props, context) {
        super(props, context)
        this.getList = this.getItemList.bind(this);
    }

    render() {
        const {list, inputValue, inputItem, addItem} = this.props;
        return <Fragment>
            <input value={inputValue} onChange={inputItem}/>
            <button onClick={addItem}>添加</button>
            {this.getList(list)}
        </Fragment>
    };

    getItemList = (list) => {
        return list.map((value, index) =>
            <Item key={index + value}
                  del={this.props.deleteItem}
                  value={value}
                  index={index}/>
        )
    };

    componentDidMount() {
        this.props.getInitList() 
    }
}

const mapStoreToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
         inputItem: (e) => dispatch(AC.change_input_value(e.target.value)),
         addItem: () => dispatch(AC.add_item()),
         deleteItem: (index) => dispatch(AC.delete_item(index)),
         getInitList: () => dispatch(AC.getlist())
    }
};
export default connect(mapStoreToProps, mapDispatchToProps)(TodoList);
```