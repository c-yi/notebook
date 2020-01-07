let path = require('path'); //
let OptimizeCss = require('optimize-css-assets-webpack-plugin'); //优化压缩 css
let UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //优化压缩 css
const CompressionPlugin = require('compression-webpack-plugin'); // GZIP
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//清除多余文件
let {smart} = require('webpack-merge');

let base = require('./webpack.common');

module.exports = smart(base, {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, './src/tools.js'),
    },
    optimization: { // 优化项
        minimizer: [
            new OptimizeCss(),//优化css
            new UglifyJsPlugin({
                cache: true, // 利用缓存
                parallel: true,// 并发打包
                sourceMap: true, //源码映射,用来找BUG
            }),
        ],
    },
    plugins: [// 数组放着所有webpack 插件
        new CompressionPlugin({ // GZIP
            algorithm: 'gzip', //压缩算法
            cache: '/cache',
            test: /\.js(\?.*)?$/i,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src"),
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./js/*', './css/*', 'tools.js.html'],
            verbose: true,
        }),
    ]
});
