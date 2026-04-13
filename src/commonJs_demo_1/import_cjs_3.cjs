const nodeFs = require("node:fs/promises")
const path = require("node:path")

// 读取文件
// const {access} = require('node:fs/promises')

const filePath = '../event_loop/poll_stage_demo.js' //node使用workspace(node xxx.js所在目录)为root开始解析

// 使用meta
const absolutePath = path.join(module.path, filePath)
// console.log(absolutePath)

module.exports.readSignalFile = async function() {
    // console.log(exports)
    try {
        nodeFs.access(absolutePath, nodeFs.constants.R_OK)
        return await nodeFs.readFile(absolutePath, {encoding: "utf-8"})
    } catch (e) {
        throw new Error('读取文件出现异常' + e)
    }
}

console.log(exports) //只有挂载的对象
console.log(module)