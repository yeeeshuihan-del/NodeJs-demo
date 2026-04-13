// require导入ems文件

const readSignalFile = require('./import_obj_1')

readSignalFile
    .then((data: string) => {
        console.log(data)
    })
