当我们 在项目中使用 new Vue ({}) 创建的时候,就知道 vue 是一个类

所以`src/core/instance/index.js`这个文件中创建了 Vue 这个类

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    // vue 是一个 构造器应该被 new 关键字 调用
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 此时这个 _init 方法不存在 ,明显是后面的添加进来的 ,目测是 31 行的 initMixin (Vue)添加的方法
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

上面的代码块中 Vue 构造函数只有一个方法 this._init(optiops) ,但是我们并没有看到这个方法,但是后面几行代码就是对Vue 构造函数的 的扩充

我们可以看到第一个扩充函数 initMIxin(Vue)

```js
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++
    let startTag, endTag
    /* istanbul ignore if 警告信息*/
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    // 将自己挂载到自己上面
    vm._self = vm
    // 重点
    /**
     * 这里的生命周期不是vue中说的生命周期,而是一个组件的初始化做的事
     * 1. 判断自己有没有父组件,如果有就把自己添加进父组件中,
     *    并设置 vm.$parent = parent,与父组件产生联系
     *
     * 2. 如果没有父组件的$root 存在就把自己vm.$root指向父组件的$root否则指向 Vm
     */
    initLifecycle(vm) // 设置$parents $root  $children 等组件关系属性
    initEvents(vm) // 监听附加在组件上的事件
    initRender(vm) // 初始化组件插槽,声明 createElement 方法
    callHook(vm, 'beforeCreate') //调用 beforeCreated 方法
    initInjections(vm) //初始化注入数据 resolve injections before data/props 在初始化data和props 前,解决注入的数据
    initState(vm) //初始化data methods computed watch
    initProvide(vm) // resolve provide after data/props 向子组件 注入 provider 数据
    callHook(vm, 'created')  // 调用 created 钩子函数

    /*
    * 总结
    * 在这里我们可以看出 beforeCreate 是不能使用 data|props|inject 中的数据的
    *
    * */


    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```

实例初始化：`new Vue()->挂载方法属性->this._init->初始化data->$mount`

挂载过程:(在`complier`版本，生成`render`函数)对el作处理，执行`mountComponent`,`mountComponent`中定义了`updateComponent`,通过实例化`watcher`的回调执行`updateComponent`,执行`updateComponent`，即调用了`vm._update、vm._render`真实渲染成`dom`对象。