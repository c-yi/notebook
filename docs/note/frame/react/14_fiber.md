# fiber
```js
windows.requestIdleCallback(scedule)

function scedule(deadline){
  // 如果当前帧内有富余的时间,或者还有任务未完成
  while(deadline.timeRemain()>0&&tesks.length>0){
      doWorkIfNeeded()
  }
    //如果任务队列＞0
 if(tesk.length>0){
     window.requestIdleCallback(未完成的任务)
 }
}
```

