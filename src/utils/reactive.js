
// "use strict";
const Observer = function (data) {
  for (let key in data) {
    defineReactive(data, key)
  }
}
const defineReactive = function (obj, key) {
  //局部变量dep，用于get set 内部调用
  const dep=new Dep()
  let val = obj[key]
  Object.defineProperty(obj, key, {
    enumerable: true, //可被循环
    configurable: true, //当前属性可被修改
    get() {
      console.log('in get')
      //调用依赖收集器中的addSub,用于收集当前属性与Watcher中的依赖关系
        dep.depend();
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      //当值发生变更时，通知依赖收集器，更新每个需要更新的Watcher
      //这里的每个需要更新通过什么断定？dep.subs
        dep.notify(); //通知
    },
  })
}

const observe = function (data) {
  return new Observer(data)
}

const Vue = function (options) {
  const self = this
  //将data赋值给this._data,
  if (options && typeof options.data === 'function') {
    this._data = options.data.apply(this)
  }
  //挂载函数
  this.mount = function () {
    new Watcher(self, self.render)
  }
  this.render = function () {
    with (self) {
        _data.text
    }
  }
  //监听this._data
  observe(this._data)
}


const Watcher = function (vm, fn) {
  const self = this
  this.vm = vm
  const dep=new Dep()
  this.addDep = function () {
    dep.addSub(self)
  }
  //更新方法，用于触发vm._render
  this.update = function () {
    console.log('in watcher update')
    fn()
  }
  //这里会首次调用vm._render,从而触发text的get
  //从而将当前的Watcher与Dep关联起来
  this.value = fn()
  //这里清空了Dep.target,为了防止notify触发时，不停的绑定Watcher与Dep，造成代码死循环
  Dep.target = null
}

// 发布订阅模式
const Dep = function () {
  const self = this
  //收集目标
  this.target = null
  //存储收集器中需要通知的watcher
  this.subs = []
  //当有目标时，绑定Dep与Watcher的关系
  this.depend = function () {
    if (Dep.target) {
      //这里其实可以直接写self.addsub(Dep.target)
      //没有这么写因为想还原源码的过程
      Dep.target.addDep(self)
    }
  }
  //为当前收集器添加watcher,
  this.addSub = function (watcher) {
    self.subs.push(watcher)
  }

  //通知收集器中所有watcher,调用其update方法
  this.notify=function(){
      for(let i=0;i<self.subs.length;i++){
          self.subs[i].update()
      }
  }
}

const vue=new Vue({
    data(){
        return{
            text:'hello word'
        }
    }
})
vue.mount()
vue._data.text = '123'; 

