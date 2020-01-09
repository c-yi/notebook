# mount

```js
//挂载
/**
*  挂载节点
* @param vnode
* @param container
* @param flagNode
*/
function mount(vnode, container, flagNode) {
  const {flag} = vnode
  if (flag === vnodeType.HTML) {
    mountElement(vnode, container, flagNode)
  } else if (flag === vnodeType.TEXT) {
    mountText(vnode, container)
  }
}

function patchData(preVal, nextVal, key, el) {
  switch (key) {
    case 'style':
      for (let k in nextVal) {
        el.style[k] = nextVal[k]
      }
      for (let k in preVal) {
        if (nextVal&&!nextVal.hasOwnProperty(k)) {
          console.log('该救治');
          el.style[k] = ''
        }
      }
      break;
    case 'class':
      el.setAttribute(key, nextVal);
      // 或者
      // el.className = nextVal
      break;
    default:
      if (key[0] === '@') {
        //移除 事件
        preVal && el.removeEventListener(key.slice(1), preVal);
        //新增 事件
        nextVal && el.addEventListener(key.slice(1), nextVal);
      } else {
        el.setAttribute(key, nextVal)
      }
  }
}
/**
*  挂载元素
* @param vnode 虚拟DOM
* @param container 容器
* @param flagNode 标志位
*/
function mountElement(vnode, container, flagNode) {
  const {tag, children, data, childrenFlag} = vnode;
  let DOM = document.createElement(tag);

  // 属性操作
  Object.keys(data).map(key => {
    patchData(null, data[key], key, DOM);
  });
  vnode.el = DOM;
  if (childrenFlag === childType.SINGLE) {
    mountText(children, DOM)
  } else if (childrenFlag === childType.MULTIPLE) {
    children.map(item => {
        mount(item, DOM)
      }
    )
  }
  // 如果更新时有插入标识位,就按照标识位来更新,否则就按照默认添加处理
  flagNode ? container.insertBefore(flagNode, DOM) : container.appendChild(DOM)
}

// 挂载文本
function mountText(vnode, container) {
  const el = document.createTextNode(vnode.children);
  vnode.el = el;
  container.appendChild(el)
}
```

