// operations defined elsewhere and ready to execute
const function1 = async (args, callback) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(args);
            resolve("result1");
        }, 1000)   
    }).then(data => {
        // console.log(data);
    }).catch(err => {
        console.error(err);
    }).finally(
        () => console.log("function1 done") //finally需要传递函数，会在promise结束后执行，不管成功还是失败
    );
    callback();
}

const function2 = async (args, callback) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(args);
            resolve("result2");
        }, 1000)   
    }).then(data => {
        // console.log(data);
    }).catch(err => {
        console.error(err);
    }).finally(
        () => console.log("function2 done")
    );
    callback();
}

const function3 = async (args, callback) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(args);
            resolve("result3");
        }, 1000)   
    }).then(data => {
        // console.log(data);
    }).catch(err => {
        console.error(err);
    }).finally(
        () => console.log("function3 done")
    );
    callback();
}

const operations = [
  { func: function1, args: "args1" },
  { func: function2, args: "args2" },
  { func: function3, args: "args3" },
];

function executeFunctionWithArgs(operation, callback) {
  // executes function
  const { args, func } = operation;
  func(args, callback);
}

function serialProcedure(operation) {
  if (!operation) {
    process.exit(0); // finished
  }
  executeFunctionWithArgs(operation, function (result) {
    // continue AFTER callback
    serialProcedure(operations.shift());
  });
}

serialProcedure(operations.shift());

