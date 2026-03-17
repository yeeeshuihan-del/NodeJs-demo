// var koa = require('koa');
// var app = new koa();

// console.log(koa);
// console.log("koa版本：" + koa.version);
// // handlers here
// // app.use(handlers);
// var port = process.argv[2];
// console.log("监听端口:" + port);
// console.log("args:" + process.argv[0] + "***" + process.argv[1]);
// app.listen(port);
// app.use(function* () {
//     // you can set the response body in handler like this
//     this.body = 'hello';
// });

// 1. 修正 Koa 实例化与类型标注
var koa = require('koa');
// 若为 Koa 1：var app = koa();
// 若为 Koa 2：const app = new koa();（推荐 Koa 2）
var app = new koa();

console.log(koa);
console.log("koa版本: " + (koa.version || "未知版本"));

// 2. 去掉 TypeScript 类型标注 : string
var port= process.argv[2] || 3000; // 给端口一个默认值，避免未传参数时为 undefined
console.log("监听端口: " + port);
console.log("args: " + process.argv[0] + "***" + process.argv[1]);

// 3. 修正中间件写法（Koa 2 推荐 async/await，Koa 1 保留 function*）
// Koa 2 写法（推荐）
app.use(async (ctx) => {
  ctx.body = 'hello koa';
});

// Koa 1 写法（若安装 Koa 1）
// app.use(function* () {
//   this.body = 'hello';
// });

app.listen(port);