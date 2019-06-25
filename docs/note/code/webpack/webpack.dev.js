let webpack = require('webpack'); //引入webpack
let path = require('path');
let {smart} = require('webpack-merge');
let base = require('./webpack.common');

module.exports = smart(base, {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    devServer: { // 服务器配置
        port: 4040, //端口号
        progress: true, //进度条
        contentBase: './build',
        compress: true, //
        hot: true, // 热更新
        open: true, // 自动打开浏览器
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    //devtool: "source-map", //源码映射,调试错误,全面,
    devtool: "cheap-module-eval-source-map", // 快,
    watch:
        true,
    watchOptions: {// 监控选项
        poll: 1000, // 每秒问1000次
        aggregateTimeout: 800, //防抖
        ignored: /node_modules/ //不需要监控的文件
    },
    plugins: [// 热更新插件
        new webpack.HotModuleReplacementPlugin(),
    ]
});