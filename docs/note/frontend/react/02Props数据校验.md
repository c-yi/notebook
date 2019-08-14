# props数据校验
> 引入校验库 import PropTypes from 'prop-types';

## 数据校验
```jsx harmony
Item.propTypes = {
    value: PropTypes.string.isRequired, // string类型,必传
    index: PropTypes.number,  // number类型
};
```

## 默认值
```jsx harmony

Item.defaultProps = {
    value: "这是子组件默认值",
};
```