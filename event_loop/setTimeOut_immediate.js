// timeout_vs_immediate.js
const fs = require('node:fs');

fs.readFile("poll_stage_demo.js", () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate'); //先执行
  });
});


// function apiCall(arg, callback) {
//   if (typeof arg !== 'string') {
//     return process.nextTick( //使用nextTicK在回调内 poll之前做参数校验
//       callback,
//       new TypeError('argument should be string')
//     );
//   }
// }

// nextTick优先级高，有时必须使用，  但是尽量用可控的setImmedidate

function apiCall(arg, callback) {
  // 同步的参数校验：检查 arg 是否是字符串
    if (typeof arg !== 'string') {
        // 关键：用 process.nextTick 执行回调
        return process.nextTick(
            callback,  // 第一个参数：要执行的回调函数
            new TypeError('argument should be string')  // 后续参数：传给回调的参数
        );
    }
  // （省略正常逻辑）
    fs.readFile("poll_stage_demo.js", () => {
        setTimeout(() => {
            console.log('timeout');
        }, 0);
        setImmediate(() => {
            console.log('immediate'); //先执行
        });
    });
}
apiCall(123, (err) => { console.log('回调执行' + err); }); // 同步执行
console.log('同步代码'); // 这行反而会后执行！