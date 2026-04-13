const EventEmitters = require("node:events");

const eventEmitter = new EventEmitters();

eventEmitter.on('start', (start, end) => {
  new Promise((resolve) => {//方法体内的是同步代码
    resolve("finish!");
    process.nextTick(() => {
        console.log(`started from ${start} to ${end}`);
        // resolve("finish!");
    })
    console.log("sync code in promise")
  }).then(
    //异步代码, promise内代码完成的回调（微任务队列 < nextTick， 即使同步代码执行完， 依旧需要等待nextTick执行才会执行），在promise代码完成之后触发
    (data) => console.log(data)
  )
});
console.log("sync code before emit");

eventEmitter.emit('start', 1, 100); //emit是回调是同步的，直接占用主线程栈

console.log("sync code");



//event loop（timer, poll, check, close）的phase执行完之后，先情况特殊微任务nextTick, 之后执行普通微任务队列结束之后，执行下一个phase