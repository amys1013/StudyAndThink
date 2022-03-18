// commonjs的关键字：require modeule.exports exports
// es module的关键字：import export

// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有的配置信息都应该写在module.exports中
// ---- webpack官方文档；
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: "bundle.js",

        // 告诉webpack不使用箭头---配置打包的环境，
        environment:{
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用模块,---利用打包的loader进行打包
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件---转换的目标
                test: /\.ts$/,
                // 要使用的loader，---用该Loader处理以ts结尾的文件；---use是从后往前执行的，有相应的顺序；
                use: [
                     // 配置babel
                     {
                         // 指定加载器---解决浏览器兼容问题1.下载安装包；2.设置配置；
                         // ---babel-loader的设置要相对复杂一点；则用一个对象包裹起来
                         loader:"babel-loader",
                         // 设置babel
                         options: {
                             // 设置预定义的环境
                             presets:[
                                 [
                                     // 指定环境的插件
                                     "@babel/preset-env",

                                     // 配置信息---整体是一个对象
                                     {
                                         // 要兼容的目标浏览器---我的浏览器需要兼容到什么什么
                                         targets:{
                                             "chrome":"58",
                                             "ie":"11"
                                         },
                                         // 指定corejs的版本---我的js要用哪个版本的corejs
                                         "corejs":"3",
                                         // 使用corejs的方式 "usage" 表示按需加载
                                         "useBuiltIns":"usage"
                                     }
                                 ]
                             ]
                         }
                    },
                    // ts-loader相对设置简单
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置Webpack插件---HTMLWebpackPlugin帮我们自动生成index.html文件,并且引入相关的资源；
    // 只需要提供一个html模板；

    // 项目修改时，自动重新构建，浏览器自动刷新，看到结果----npm i webpack-dev-server

    // ---每一次编译前，将dist目录进行清空，然后将文件放进去，（原来是替换的），这样清除就保证了每次打包是最新的文件
    // CleanWebpackPlugin
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    // 用来设置引用模块---设置引用模块，告诉webpack哪些可以作为模块使用；
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode:"production"

};