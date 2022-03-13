import MyPromise from './promise.js'
const promise = new MyPromise((resolve, reject) => { 
  resolve('success')
//   reject('error')
})

// promise.then(
//   (value) => {
//     console.log('resolve', value)
//   },
//   (reason) => {
//     console.log('reason', reason)
//   },
// )

function other() {
  return new MyPromise((resolve, reject) => {
    resolve('other')
  })
}

promise.then((value) => {
  console.log(1, value)
  return other()
}).then(value=>{
console.log('2',value)
})
// promise.then((value) => {
//   console.log(2, value)
// })
// promise.then((value) => {
//   console.log(3, value)
// })
