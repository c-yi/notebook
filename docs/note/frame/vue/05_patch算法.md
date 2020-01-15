# patch算法


```text


```


```js
/**
 *
 * @param prev
 * @param next
 * @param container
 */
function patch(prev, next, container) {
  let prevFlag = prev.flag,
    nextFlag = next.flag;
  Html
  if (prevFlag !== nextFlag) {
    replaceVnode(prev, next, container)
  } else if (nextFlag === vnodeType.HTML) {
    patchElement(prev, next, container)
  } else if (nextFlag === vnodeType.TEXT) {
    patchText(prev, next)
  }
}

```

## 替换节点

```js
/**
 * 直接替换
 * @param prev
 * @param next
 * @param container
 */
function replaceVnode(prev, next, container) {
  container.removeChild(prev.el);
  mount(next, container)
}
```

## 文本节点

```js
//更新文本
function patchText(prev, next) {
  let el = (next.el = prev.el);
  if (next.children !== prev.children) {
    el.nodeValue = next.children
  }
}
```

## 元素节点

```js
//更新元素
function patchElement(prev, next, container) {
  // 如果元素标签不同,直接替换
  if (prev.tag !== next.tag) {
    replaceVnode(prev, next, container)
    return
  }
  let el = next.el = prev.el;
  let preData = prev.data;
  let nextData = next.data;
  // 更新属性
  if (nextData) {
    for (let key in nextData) {
      let preVal = preData[key];
      let nextVal = nextData[key];
      patchData(preVal, nextVal, key, el)
    }
  }
  // 在prev中有的属性在next中没有的属性就需要移除
  if (preData) {
    for (let key in preData) {
      let preVal = preData[key];
      preVal && !nextData.hasOwnProperty(key) && patchData(preVal, null, key, el)
    }
  }
  // data更新完毕
  // 更新 children
  patchChildren(
    prev.childrenFlag,
    next.childrenFlag,
    prev.children,
    next.children,
    el
  )
}
```

## 多个子元素

|老节点|新节点|
|---|---|
|1. 老的是单独的<br>2. 老的是空的<br>3. 老的是多个|1. 新的是单独的<br>2. 新的是空的<br>3. 新的是多个<br>|

::: tip
 共会出现9中情况 ,其中最复杂的就是 新老都是多个节点
:::


```js
function patchChildren(preFlag, nextFlag, preChildren, nextChildren, container) {
  const {SINGLE, MULTIPLE, EMPTY} = childType
  switch (preFlag) {
    // 老的只有一个
    case SINGLE:
      switch (nextFlag) {
        case SINGLE:
          // 旧节点和新节点都是只有一个子节点
          patch(preChildren, nextChildren, container)
          break;
        case EMPTY:
          //旧节点有一个子节点,新节点没有,直接删除这个元素
          container.removeChild(preChildren.el);
          break;
        case MULTIPLE:
          // 旧节点有单个子节点,新节点有多个子节点
          // 先删除旧节点映射的DOM 然后循环挂载新节点的DOM
          container.removeChild(preChildren.el);
          nextChildren.map(vnode => {
            mount(vnode, container)
          })
          break;
      }
      break;
	// 老的为空	
    case EMPTY:
      switch (nextFlag) {
        case SINGLE:
          // 旧的为空,新的有一个,直接新增
          mount(nextChildren, container);
          break;
        case EMPTY:
          // 都为空
          break;
        case MULTIPLE:
          // 旧的为空 ,新的有多个 遍历挂载新的节点
          nextChildren.map(vnode => {
            mount(vnode, container)
          });
          break;
      }
      break;
	// 老的有多个	
    case MULTIPLE:
      switch (nextFlag) {
        case SINGLE:
          // 移除旧的
          preChildren.map(vnode => {
            container.removeChild(vnode.el)
          });
          // 挂载新的 元素
          mount(vnode, container);
          break;
        case EMPTY:
          // 移除旧的
          preChildren.map(vnode => {
            container.removeChild(vnode.el)
          });
          break;
        case MULTIPLE:
          // =================== 最重要的一步 ==============================
          let lastIndex = 0; // 老节点的索引
          for (let i = 0; i < nextChildren.length; i++) {
            let nextNode = nextChildren[i]
            let j = 0;
            let find = false; //是否在旧节点中找到新节点,没找到就新增节点
            // 寻找节点并 patch
            for (let j = 0; j < preChildren.length; j++) {
              let preNode = preChildren[j]
              if (preChildren.key === nextNode.key) {
                find = true
                // key相同我们认为是同一个元素
                patch(preNode, nextNode, container)
                // 当 j 小于游标的时候说明 nextVnode 相对于 preVnode 的顺序改变了;
                // 所以我们需要做一个调整
                if (j < lastIndex) {
                  let flagNode = nextChildren[i - 1].el.nextSibling;
                  container.insertBefore(preNode.el, flagNode);
                  break;// 结束整个循环 continue 结束当次循环
                } else {
                  lastIndex = j;
                }
              }
            }
            // 未找到相应的旧节点就需要新增
            if (!find) {
              let flagNode = i === 0 
              	? preChildren[0].el 
              	: nextChildren[i - 1].el.nextSibling;
              mount(nextNode, container, flagNode)
            }
          }
          // 移除不需要的元素
          for (let i = 0; i < preChildren.length; i++) {
            let preNode = preChildren[i]
            //判断新的节点种是否含有旧的节点//没有就进行删除操作
            let has = nextChildren.some(next => {
              next.key = preNode.key
            });
            if (!has) {
              container.removeChild(preNode.el)
            }
          }
          break;
      }
      break;
  }
}

```

## path 算法优化

