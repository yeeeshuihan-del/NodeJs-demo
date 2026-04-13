//给vscode配置实时保存

// 模拟两个 Promise
const promise1 = new Promise(resolve => {
  setTimeout(() => resolve('First task completed'), 100);
});
const promise2 = new Promise(resolve => {
  setTimeout(() => resolve('Second task completed'), 100);
});

async function performTasks() {
  try {
    console.log('进入performTasks'); // 同步执行
    const result1 = await promise1; // 关键：await 触发执行权让出
    //之后都是阻塞代码
    console.log(result1); // 第一段异步恢复后执行
    console.log("阻塞1？");

    const result2 = await promise2; // 再次让出执行权
    console.log(result2); // 第二段异步恢复后执行
    console.log("阻塞2？");
  } catch (error) {
    console.error(error);
  }
}

// 同步调用函数
performTasks();
console.log('同步代码：performTasks调用后'); // 关键：这行何时执行？