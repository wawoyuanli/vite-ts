// let promise=new Promise((resolve,reject)=>{
//     return resolve('胡元丽')
// })
// promise.then(res=>{
//     console.log(res,'00')
// })

// Promise.resolve()
//   .then(()=>{
//     console.log(0)
//     return Promise.resolve(4)
// }).then(res=>{
//     console.log(res)
// })

// Promise.resolve().then(()=>{
//     console.log(1)
// }).then(()=>{
//     console.log(2)
// }).then(()=>{
//     console.log(3)
// }).then(()=>{
//     console.log(5)
// }).then(()=>{
//     console.log(6)
// })

const PENDING = 'pending'
const FULFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(excutor) {
    //excutor是一个执行器，进入会立即执行
    excutor(this.resolve, this.reject)
  }
  //储存状态的变量,初始值是pending
  status = PENDING
  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象

  //成功之后的值
  value = null
  //失败之后的原因
  reason = null

  //更改成功后的状态
  resolve = (value) => {
    //只有状态是等待才执行状态修改
    if (this.status === PENDING) {
      //修改状态为成功
      this.status = FULFILLED
      //修改成功后的值
      this.value = value
      // 判断成功回调是否存在，如果存在就调用
      //   this.onFullfilledCallback && this.onFullfilledCallback(value)

      //resolve里面将所有成功的回调拿出来执行
      while (this.onFullfilledCallback.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFullfilledCallback.shift()(value)
      }
    }
  }
  //更改失败后的状态
  reject = (reason) => {
    if (reason.status === PENDING) {
      this.status = REJECTED
      this.value = reason
      //   this.onRejectedCallback && this.onRejectedCallback
      // resolve里面将所有失败的回调拿出来执行
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }

  //then方法的实现
  //存储成功回调函数
  //   onFullfilledCallback = null
  onFullfilledCallback = []
  //存储失败回调函数
  //   onRejectedCallback = null
  onRejectedCallback = []

  then(onFullfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 获取成功回调函数的执行结果
        const x = onFullfilled(this.value)
        // 传入 resolvePromise 集中处理
        resolvePromise(x, resolve, reject)
        onFullfilled(this.value)
      } else if (this.status === REJECTED) {
        onRejected(this.resolve)
      } else if (this.status === PENDING) {
        // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
        // (    //   等到执行成功失败函数的时候再传递)

        // 因为不知道后面状态的变化，这里先将成功回调和失败回调存储起来
        // 等待后续调用
        this.onFullfilledCallback.push(onFullfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })
    return promise2
  }
}
function resolvePromise(x, resolve, reject) {
  // 判断x是不是 MyPromise 实例对象
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  }else{
      resolve(x)
  }
}
export default MyPromise
