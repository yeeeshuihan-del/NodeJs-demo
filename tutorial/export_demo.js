//commonJs规范，早期的nodeJs规范，node20兼容commonJs和es6(2015年之后的nodeJs规范)

( //对于xxx.js被require导入的时候会作为一个函数执行，并且exports, require, module, __filename, __dirname参数系统会自定传入
    function(exports, require, module, __filename, __dirname) {

        const logger = function() {
            new Promise(
                (resolve, reject) => {
                    setTimeout(() => {
                        var random = global.Math.random();
                        if (random > 0.7) {
                            resolve("success")
                        } else {
                            reject("fail");
                        }
                    }, 1000);
                }
            )
            .then((data) => {console.log(data)})
            .catch((err) => {console.log("error:" + err)});
        }
        
        logger();
        
        //exports表示当前对象的暴露内容
        exports.logger = logger;
        const version = "v1.0";
        exports.version = version;

        module.exports.logger = logger;

        //require是一个函数，Js的函数也是对象，可以挂载属性
        console.log(require);

        console.log(exports == module.exports); //true
    }
)(exports, require, module, __filename, __dirname)