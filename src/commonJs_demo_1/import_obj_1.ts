//commonJs

const nodeFs = require("node:fs/promises")
const path = require("node:path")

// 读取文件
// const {access} = require('node:fs/promises')

const filePath: string = '../event_loop/poll_stage_demo.js' //node使用workspace(node xxx.js所在目录)为root开始解析

// 使用meta
const absolutePath = path.join(module.path, filePath)
// console.log(absolutePath)

module.exports.readSignalFile = async function(): Promise<string> {
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
/*
{
  id: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts',
  path: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1',
  exports: { readSignalFile: [Function (anonymous)] },
  filename: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\node_modules',
    'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\node_modules',
    'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\node_modules',
    'C:\\Users\\Administrator\\vscodeProjects\\node_modules',
    'C:\\Users\\Administrator\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ],
  Symbol(kIsCachedByESMLoader): true,
  Symbol(kIsExecuting): true
}
*/

console.log(module.exports === exports) //true

console.log(require.main === module) //true

// 当前文件dir / file的绝对路径
console.log(__dirname)
console.log(__filename)
/*
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: {
    id: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts',
    path: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1',
    exports: { readSignalFile: [Function (anonymous)] },
    filename: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts',
    loaded: false,
    children: [],
    paths: [
      'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\node_modules',
      'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\node_modules',
      'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\node_modules',
      'C:\\Users\\Administrator\\vscodeProjects\\node_modules',
      'C:\\Users\\Administrator\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ],
    Symbol(kIsCachedByESMLoader): true,
    Symbol(kIsExecuting): true
  },
  // main就是程序入口，require.main === module


  extensions: [Object: null prototype] {
    '.js': [Function: transformer],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)],
    '.ts': [Function: transformer],
    '.tsx': [Function: transformer],
    '.jsx': [Function: transformer]
  },
  cache: [Object: null prototype] {
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\preflight.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\preflight.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: {},
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\preflight.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\get-pipe-path-BoR10qr8.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\get-pipe-path-BoR10qr8.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\get-pipe-path-BoR10qr8.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\temporary-directory-B83uKxJF.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\temporary-directory-B83uKxJF.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\temporary-directory-B83uKxJF.cjs',
      loaded: true,
      children: [],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\client-D6NvIMSC.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\client-D6NvIMSC.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\client-D6NvIMSC.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\suppress-warnings.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\suppress-warnings.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: {},
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\suppress-warnings.cjs',
      loaded: true,
      children: [],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\cjs\\index.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\cjs\\index.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\cjs',
      exports: {},
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\cjs\\index.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\register-D46fvsV_.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\register-D46fvsV_.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\register-D46fvsV_.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\get-tsconfig\\dist\\index.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\get-tsconfig\\dist\\index.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\get-tsconfig\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\get-tsconfig\\dist\\index.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\resolve-pkg-maps\\dist\\index.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\resolve-pkg-maps\\dist\\index.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\resolve-pkg-maps\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\resolve-pkg-maps\\dist\\index.cjs',
      loaded: true,
      children: [],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\index-gckBtVBf.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\index-gckBtVBf.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\index-gckBtVBf.cjs',
      loaded: true,
      children: [Array],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\esbuild\\lib\\main.js': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\esbuild\\lib\\main.js',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\esbuild\\lib',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\node_modules\\esbuild\\lib\\main.js',
      loaded: true,
      children: [],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): undefined,
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\index-BWFBUo6r.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\index-BWFBUo6r.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\index-BWFBUo6r.cjs',
      loaded: true,
      children: [],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): 'commonjs',
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\lexer-DgIbo0BU.cjs': {
      id: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\lexer-DgIbo0BU.cjs',
      path: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\tsx\\dist\\lexer-DgIbo0BU.cjs',
      loaded: true,
      children: [],
      paths: [Array],
      Symbol(kIsMainSymbol): false,
      Symbol(kIsCachedByESMLoader): false,
      Symbol(kURL): undefined,
      Symbol(kFormat): undefined,
      Symbol(kIsExecuting): false
    },
    'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts': {
      id: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts',
      path: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1',
      exports: [Object],
      filename: 'C:\\Users\\Administrator\\vscodeProjects\\nodeJs-demo\\NodeJs-demo\\commonJs_demo_1\\import_obj_1.ts',
      loaded: false,
      children: [],
      paths: [Array],
      Symbol(kIsCachedByESMLoader): true,
      Symbol(kIsExecuting): true
    }
  }
}
*/