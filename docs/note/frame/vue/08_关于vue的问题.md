# 关于vue的问题
## keep-alive的生命周期
1.activated： 页面第一次进入的时候，钩子触发的顺序是created->mounted->activated
2.deactivated: 页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated

# vue中怎么重置data

Object.assign（）方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象
this.$data获取当前状态下的data
this.$options.data()获取该组件初始状态下的data。
使用 Object.assign(this.$data,this.$options.data.call(this)) 这样写才有用

# 在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？

currentTarget：事件绑定的元素
target:鼠标触发的元素
currentTarget 始终是监听事件者，而 target 是事件的真正发出者

## 说说你对vue组件的设计原则的理解

 + 容错处理, 这个要做好, 极端场景要考虑到, 不能我传错了一个参数你就原地爆炸
 + 缺省值(默认值)要有, 一般把应用较多的设为缺省值
 + 颗粒化, 把组件拆分出来.
 + 一切皆可配置, 如有必要, 组件里面使用中文标点符号, 还是英文的标点符号, 都要考虑到
 + 场景化, 如一个dialog弹出, 还需要根据不同的状态封装成success, waring, 等
 + 有详细的文档/注释和变更历史, 能查到来龙去脉, 新版本加了什么功能是因为什么
 + 组件名称, 参数prop, emit, 名称设计要通俗易懂, 最好能做到代码即注释这种程度
 + 可拓展性, 前期可能不需要这个功能, 但是后期可能会用上, 要预留什么, 要注意什么, 心里要有逼数
 + 规范化,我这个input组件, 叫on-change, 我另外一个select组件叫change, 信不信老子捶死你
 + 分阶段: 不是什么都要一期开发完成看具体业务, 如果一个select, 我只是个简单的select功能, 
 什么multi老子这个版本压根不需要,别TM瞎折腾! 给自己加戏
