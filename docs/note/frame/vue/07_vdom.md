# vdom

## 元素节点

```js
function createdElement(tag, data, children = null) {
  let flag, childrenFlag;
  if (typeof tag == 'string') {
    flag = vnodeType.HTML
  } else if (typeof tag == 'function') {
    flag = vnodeType.COMPONENT
  } else {
    flag = vnodeType.TEXT
  }
  if (Array.isArray(children)) {
    childrenFlag = children.length === 0 ? childType.EMPTY : childType.MULTIPLE
  } else if (children === null) {
    childrenFlag = childType.EMPTY
  } else {
    //其他情况认为是文本
    childrenFlag = childType.SINGLE
    children = createdTextVnode(children + '')
  }
  return {
    flag,
    tag,
    data,
    key: data && data.key || null,
    children,
    childrenFlag,
    el: null
  }
}


```

## 文本节点

```js
/**
 * 返回 vnode
 *
 * @param {*} text
 * @returns
 */
function createdTextVnode(text) {
  return {
    flag: vnodeType.TEXT,
    tag: null,
    data: null,
    children: text,
    childrenFlag: childType.EMPTY
  }
}
```

