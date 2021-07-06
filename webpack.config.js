const path = require('path');    // 引入path模块
const config = {
    entry: path.resolve(__dirname, "src/index.js"),  // 指定入口文件，
    output: {
        path: path.resolve(__dirname, "dist"),        // 打包到哪个路径下，
        filename: "build.js",　　　　　　　　　　　　　// 打包成功后的文件名称
        publicPath: "/dist/"
    }
}

module.exports = config;


